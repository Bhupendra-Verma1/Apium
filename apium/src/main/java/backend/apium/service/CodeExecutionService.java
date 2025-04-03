package backend.apium.service;

import org.springframework.stereotype.Service;
import java.io.*;
import java.util.concurrent.*;

@Service
public class CodeExecutionService {

    private static final long TIMEOUT_SECONDS = 10; // Prevent long-running code

    public String executeCode(String language, String code) {
        String result = "";
        File tempFile = null;
        Process process = null;

        try {
            // Create a temporary file
            tempFile = createTempFile(language, code);
            if (tempFile == null) {
                return "Error: Failed to create temporary file.";
            }

            // Create the execution command
            String command = getExecutionCommand(language, tempFile);
            if (command.isEmpty()) {
                return "Unsupported language.";
            }

            // Execute the command with timeout
            result = executeWithTimeout(command);

        } catch (Exception e) {
            result = "Error executing code: " + e.getMessage();
        } finally {
            // Cleanup: Delete temp file
            if (tempFile != null) {
                tempFile.delete();
            }
        }

        return result;
    }

    private File createTempFile(String language, String code) throws IOException {
        String extension = language.equalsIgnoreCase("java") ? ".java" : ".py";
        File tempFile = File.createTempFile("code_", extension);
        try (FileWriter writer = new FileWriter(tempFile)) {
            writer.write(code);
        }
        return tempFile;
    }

    private String getExecutionCommand(String language, File tempFile) {
        if ("java".equalsIgnoreCase(language)) {
            return "docker run --rm -v " + tempFile.getAbsolutePath() + ":/app/Main.java openjdk:17 java /app/Main.java";
        } else if ("python".equalsIgnoreCase(language)) {
            return "docker run --rm -v " + tempFile.getAbsolutePath() + ":/app/script.py python:3 python /app/script.py";
        }
        return "";
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
            return future.get(TIMEOUT_SECONDS, TimeUnit.SECONDS);
        } catch (TimeoutException e) {
            process.destroy();
            return "Error: Code execution timed out.";
        } finally {
            executor.shutdown();
        }
    }

}
