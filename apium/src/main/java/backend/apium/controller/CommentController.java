package backend.apium.controller;


import backend.apium.model.Comment;
import backend.apium.security.JwtUtil;
import backend.apium.service.CommentService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private CommentService service;
    private JwtUtil jwtUtil;

    public CommentController(CommentService service, JwtUtil jwtUtil) {
        this.service = service;
        this.jwtUtil = jwtUtil;
    }

    private String getEmailFromHeader(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if(authHeader == null || authHeader.startsWith("Bearer ")) {
            throw new RuntimeException("No token found");
        }

        return jwtUtil.getEmailFromToken(authHeader.substring(7));
    }

    @PostMapping
    public Comment createComment(@RequestBody Comment comment, HttpServletRequest request) {
        String email = getEmailFromHeader(request);
        return service.createComment(email, comment);
    }

    @GetMapping
    public List<Comment> getAllComments() {
        return service.getAllComment();
    }

    @PutMapping("/{id}")
    public Comment updateComment(@PathVariable String id, @RequestBody Map<String, String> updateRequest, HttpServletRequest request) {
        String email = getEmailFromHeader(request);
        return service.updateComment(email, id, updateRequest.get("content"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable String id, HttpServletRequest request) {
        String email = getEmailFromHeader(request);
        service.deleteComment(email, id);
        return ResponseEntity.ok("Comment deleted successfully");
    }
}
