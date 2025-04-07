package backend.apium.dto;

import lombok.Data;

@Data
public class CodeRequest {
    private String title;
    private String language;
    private String content;
}