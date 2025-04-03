package backend.apium.dto;

import lombok.Data;

@Data
public class CodeRequest {
    private String language;
    private String content;
}