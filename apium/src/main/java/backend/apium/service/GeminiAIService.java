package backend.apium.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class GeminiAIService {

    @Value("${gemini.api.key}")
    private String apiKey;
    @Value("${gemini.api.url}")
    private String apiUrl;

    private WebClient webClient;

    public GeminiAIService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }

    public String getCodeSuggestions(String code) {
        String url = apiUrl  + apiKey;

        // Escape double quotes for JSON format
        String escapedCode = code.replace("\"", "\\\"");

        String prompt = "Analyze and improve the following code \n" + escapedCode;

        // Corrected JSON payload
        Map<String, Object> requestBody = Map.of(
                "contents", List.of(
                        Map.of("parts", List.of(
                                Map.of("text", prompt)
                        ))
                )
        );

        ResponseEntity<Map> response =  webClient.post()
                .uri(url)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .toEntity(Map.class)
                .block();


        if(response.getBody() != null) {
            List<Map<String, Object>> candidates = (List<Map<String, Object>>) response.getBody().get("candidates");
            Map<String, Object> content = (Map<String, Object>) candidates.get(0).get("content");
            if (content != null) {
                List<Map<String, String>> parts = (List<Map<String, String>>) content.get("parts");
                if (parts != null && !parts.isEmpty()) {
                    return parts.get(0).get("text");  // Extract the AI-generated text
                }
            }
        }
        return "No response from AI";
    }
}
