package backend.apium.controller;

import backend.apium.dto.CodeRequest;
import backend.apium.service.CodeExecutionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/execute")
public class CodeExecutionController {

    private final CodeExecutionService service;

    public CodeExecutionController(CodeExecutionService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> executeCode(@RequestBody CodeRequest request) {
        try {
            String output = service.executeCode(request.getTitle(), request.getLanguage(), request.getContent());
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(e.getMessage());
        }
    }
}
