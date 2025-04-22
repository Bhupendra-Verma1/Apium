package backend.apium.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CodeRequest {
    @NotBlank
    private String title;

    @NotBlank
    private String language;

    @NotBlank
    private String content;
}