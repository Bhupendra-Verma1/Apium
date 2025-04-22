package backend.apium.controller;

import backend.apium.dto.CodeRequest;
import backend.apium.service.GeminiAIService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/ai-suggestions")
public class GeminiSuggestionController {

    private final GeminiAIService geminiAIService;

    public GeminiSuggestionController(GeminiAIService geminiAIService) {
        this.geminiAIService = geminiAIService;
    }

    @PostMapping
    public ResponseEntity<String> getSuggestions(@RequestBody Map<String, String> body) {

        if(!body.containsKey("code")) {
            return ResponseEntity.status(500).body("Error Invalid request Body");
        }

        String str = geminiAIService.getCodeSuggestions(body.get("code"));

        if(str == null) {
            return ResponseEntity.status(500).body("Error fetching AI suggestion");
        }

        return ResponseEntity.ok(str);
    }
}
