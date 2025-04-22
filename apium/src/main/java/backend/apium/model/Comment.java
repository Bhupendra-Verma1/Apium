package backend.apium.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "comment")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "user_id" , nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "share_code_id", nullable = false)
    private ShareCode shareCode;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime created_at = LocalDateTime.now();
}
