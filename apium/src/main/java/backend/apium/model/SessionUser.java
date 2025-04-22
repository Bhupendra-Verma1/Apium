package backend.apium.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "session_users")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SessionUser {
    
    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "session_id", nullable = false)
    private RealTimeSession session;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, updatable = false)
    private LocalDateTime joinedAt = LocalDateTime.now();
}
