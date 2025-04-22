package backend.apium.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "share_code")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ShareCode {

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "code_id", nullable = false)
    private Code code;

    @Column(nullable = false)
    private LocalDateTime share_at = LocalDateTime.now();

    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy = "shareCode", cascade = CascadeType.ALL)
    private List<Comment> comments;

    @OneToMany(mappedBy = "shareCode", cascade = CascadeType.ALL)
    private List<Star> stars;

    @Column(nullable = false)
    private Boolean visibility = true;

}
