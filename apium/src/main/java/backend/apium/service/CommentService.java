package backend.apium.service;

import backend.apium.model.Comment;
import backend.apium.model.ShareCode;
import backend.apium.model.User;
import backend.apium.repository.CommentRepository;
import backend.apium.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CommentService {

    private CommentRepository commentRepository;
    private UserRepository userRepository;

    public Comment createComment(String email, Comment comment) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        comment.setId(UUID.randomUUID().toString());
        comment.setUser(user);

        return commentRepository.save(comment);
    }

    public List<Comment> getAllComment() {
        return commentRepository.findAll();
    }

    public Comment updateComment(String email, String commentId, String newContent) {

        Comment existingComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("Comment not found"));

        if(!existingComment.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized to update this comment");
        }

        existingComment.setContent(newContent);
        return commentRepository.save(existingComment);
    }

    public void deleteComment(String email, String commentId) {
        Comment existingComment = commentRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("Comment not found"));

        if(!existingComment.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized to delete comment");
        }

        commentRepository.delete(existingComment);
    }
}
