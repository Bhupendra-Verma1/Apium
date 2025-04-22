package backend.apium.service;

import org.springframework.stereotype.Service;
import java.io.*;
import java.util.concurrent.*;

@Service
public class CodeExecutionService {

    private static final long TIMEOUT_SECONDS = 15; // Prevent long-running code

    public String executeCode(String title, String language, String code) throws Exception {
        String result = "";
        File tempFile = null;
        Process process = null;

        try {
            // Create a temporary file
            tempFile = createTempFile(title, language, code);
            if (tempFile == null) {
                return "Error: Failed to create temporary file.";
            }

            // Create the execution command
            String command = getExecutionCommand(language, tempFile);
            if (command.isEmpty()) {
                throw new RuntimeException("Unsupported language.");
            }

            // Execute the command with timeout
            return executeWithTimeout(command);
        } finally {
            // Cleanup: Delete temp file
            if (tempFile != null) {
                tempFile.delete();
            }
        }
    }

    private File createTempFile(String title, String language, String code) throws IOException {
        // Get the system's temporary directory
        File tempDir = new File(System.getProperty("java.io.tmpdir"));

        // Create the file object using the provided title (e.g., "main.java")
        File tempFile = new File(tempDir, title);

        // Write code to the file
        try (FileWriter writer = new FileWriter(tempFile)) {
            writer.write(code);
        }

        return tempFile;
    }


    private String getExecutionCommand(String language, File tempFile) {
        String filePath = tempFile.getAbsolutePath();
        switch (language.toLowerCase()) {
            case "java":
                return "docker run --rm -v " + filePath + ":/app/Main.java openjdk:17 java /app/Main.java";
            case "python":
                return "docker run --rm -v " + filePath + ":/app/script.py python:3 python /app/script.py";
            case "javascript":
                return "docker run --rm -v " + filePath + ":/app/script.js node:20 node /app/script.js";
            case "c":
                return "docker run --rm -v " + filePath + ":/app/main.c gcc:latest sh -c \"gcc /app/main.c -o /app/main && /app/main\"";
            case "cpp":
                return "docker run --rm -v " + filePath + ":/app/main.cpp gcc:latest sh -c \"g++ /app/main.cpp -o /app/main && /app/main\"";
            case "go":
                return "docker run --rm -v " + filePath + ":/app/main.go golang:latest go run /app/main.go";
            case "rust":
                return "docker run --rm -v " + filePath + ":/app/main.rs rust:latest rustc /app/main.rs -o /app/main && /app/main";
            case "r":
                return "docker run --rm -v " + filePath + ":/app/script.R r-base:latest Rscript /app/script.R";
            case "php":
                return "docker run --rm -v " + filePath + ":/app/script.php php:latest php /app/script.php";
            case "sql":
                return "docker run --rm -v " + filePath + ":/app/script.sql postgres:latest sh -c \"psql -U postgres -f /app/script.sql\"";
            case "html":
                return "docker run --rm -v " + filePath + ":/usr/share/nginx/html/index.html nginx:alpine";
            case "csharp":
                return "docker run --rm -v " + filePath + ":/app/Program.cs mcr.microsoft.com/dotnet/sdk:6.0 sh -c \"dotnet new console -o /app && cp /app/Program.cs /app/Program.cs && dotnet run --project /app\"";
            case "swift":
                return "docker run --rm -v " + filePath + ":/app/main.swift swift:latest swift /app/main.swift";
            default:
                return "";
        }
    }

    private String executeWithTimeout(String command) throws Exception {
        ProcessBuilder processBuilder;

        // Check OS and set appropriate shell
        if (System.getProperty("os.name").toLowerCase().contains("win")) {
            processBuilder = new ProcessBuilder("cmd.exe", "/c", command); // Windows
        } else {
            processBuilder = new ProcessBuilder("sh", "-c", command); // Linux/macOS
        }

        processBuilder.redirectErrorStream(true);
        Process process = processBuilder.start();

        ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<String> future = executor.submit(() -> {
            StringBuilder output = new StringBuilder();
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line).append("\n");
                }
            }
            return output.toString();
        });

        try {
            String output = future.get(TIMEOUT_SECONDS, TimeUnit.SECONDS);
            int exitCode = process.waitFor(); // Wait for process to complete

            if (exitCode != 0) {
                throw new RuntimeException("Code execution failed with exit code " + exitCode + ":\n" + output);
            }

            return output;
        } catch (TimeoutException e) {
            process.destroy();
            throw new RuntimeException("Error: Code execution timed out.");
        } finally {
            executor.shutdown();
        }
    }
}
