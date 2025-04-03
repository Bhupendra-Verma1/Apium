package backend.apium.controller;

import backend.apium.model.Code;
import backend.apium.service.CodeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/codes")
public class CodeController {

    private final CodeService codeService;

    public CodeController(CodeService codeService) {
        this.codeService = codeService;
    }

    // For simplicity, we assume that the user's email is passed as a header.
    // In a real-world scenario, you would extract the authenticated user's email from the JWT.
    private String getUserEmailFromHeader(@RequestHeader("X-USER-EMAIL") String email) {
        return email;
    }

    @PostMapping
    public ResponseEntity<Code> createCode(@RequestHeader("X-USER-EMAIL") String email, @RequestBody Code code) {
        Code createdCode = codeService.createCode(getUserEmailFromHeader(email), code);
        return ResponseEntity.ok(createdCode);
    }

    @GetMapping
    public ResponseEntity<List<Code>> getUserCodes(@RequestHeader("X-USER-EMAIL") String email) {
        List<Code> codes = codeService.getUserCodes(getUserEmailFromHeader(email));
        return ResponseEntity.ok(codes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Code> getCodeById(@PathVariable String id) {
        return codeService.getCodeById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Code> updateCode(@RequestHeader("X-USER-EMAIL") String email,
                                           @PathVariable String id,
                                           @RequestBody Code code) {
        Code updatedCode = codeService.updateCode(id, code, getUserEmailFromHeader(email));
        return ResponseEntity.ok(updatedCode);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCode(@RequestHeader("X-USER-EMAIL") String email,
                                             @PathVariable String id) {
        codeService.deleteCode(id, getUserEmailFromHeader(email));
        return ResponseEntity.ok("Code snippet deleted successfully");
    }
}
