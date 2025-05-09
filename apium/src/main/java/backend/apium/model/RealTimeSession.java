package backend.apium.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "real_time_sessions")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class RealTimeSession {
    
    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "code_id", nullable = false)
    private Code code;

    @Column(unique = true, nullable = false)
    private String sessionToken;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
