package backend.apium.service;

import backend.apium.model.Code;
import backend.apium.model.User;
import backend.apium.repository.CodeRepository;
import backend.apium.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CodeService {

    private final CodeRepository codeRepository;
    private final UserRepository userRepository;

    public CodeService(CodeRepository codeRepository, UserRepository userRepository) {
        this.codeRepository = codeRepository;
        this.userRepository = userRepository;
    }

    // Create a new code snippet for a given user (by email)
    public Code createCode(String email, Code code) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        code.setUser(user);
        return codeRepository.save(code);
    }

    // Retrieve all code snippets for a given user (by email)
    public List<Code> getUserCodes(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return codeRepository.findByUserId(user.getId());
    }

    // Retrieve a single code snippet by its ID
    public Optional<Code> getCodeById(String id) {
        return codeRepository.findById(id);
    }

    // Update an existing code snippet
    public Code updateCode(String id, Code updatedCode, String email) {
        Code existingCode = codeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Code snippet not found"));

        // Ensure that the code belongs to the authenticated user
        if (!existingCode.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized to update this code snippet");
        }

        existingCode.setTitle(updatedCode.getTitle());
        existingCode.setLanguage(updatedCode.getLanguage());
        existingCode.setContent(updatedCode.getContent());
        existingCode.setUpdatedAt(java.time.LocalDateTime.now());
        return codeRepository.save(existingCode);
    }

    // Delete a code snippet
    public void deleteCode(String id, String email) {
        Code existingCode = codeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Code snippet not found"));

        // Ensure that the code belongs to the authenticated user
        if (!existingCode.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized to delete this code snippet");
        }
        codeRepository.delete(existingCode);
    }
}
