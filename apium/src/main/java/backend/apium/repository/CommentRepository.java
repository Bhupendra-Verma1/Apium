package backend.apium.repository;

import backend.apium.model.Comment;
import backend.apium.model.ShareCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, String> {

}
