package backend.apium.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "ai_suggestions")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AISuggestion {
    
    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "code_id", nullable = false)
    private Code code;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String suggestionText;

    @Column(nullable = false)
    private String modelUsed;  // E.g., GPT-4

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
