package backend.apium.controller;

import backend.apium.model.Code;
import backend.apium.model.ShareCode;
import backend.apium.service.ShareCodeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/share")
public class ShareCodeController {

    private ShareCodeService shareCodeService;

    public ShareCodeController(ShareCodeService shareCodeService) {
        this.shareCodeService = shareCodeService;
    }

    // Todo : extract user from jwt token
    private String getUserEmailFromHeader(@RequestHeader("X-USER-EMAIL") String email) {
        return email;
    }

    @PostMapping
    public ResponseEntity<ShareCode> createShareCode(@RequestHeader("X-USER-EMAIL") String email, @RequestBody ShareCode shareCode) {
        ShareCode createdShareCode = shareCodeService.createShareCode(getUserEmailFromHeader(email), shareCode);
        return ResponseEntity.ok(createdShareCode);
    }

    @GetMapping
    public ResponseEntity<List<ShareCode>> retrieveUserShareCode(@RequestHeader("X-USER-EMAIL") String email) {
        List<ShareCode> shareCodes = shareCodeService.getUserShareCodes(getUserEmailFromHeader(email));
        return ResponseEntity.ok(shareCodes);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ShareCode>> retrieveAllShareCodes() {
        List<ShareCode> shareCodes = shareCodeService.getAllShareCodes();
        return ResponseEntity.ok(shareCodes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShareCode> getShareCodeById(@PathVariable String id) {
        return shareCodeService.getShareCodeById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShareCode> updateShareCode(@RequestHeader("X-USER-EMAIL") String email,
                                           @PathVariable String id,
                                           @RequestBody ShareCode shareCode) {
        ShareCode updatedShareCode = shareCodeService.updateShareCode(getUserEmailFromHeader(email), id, shareCode);
        return ResponseEntity.ok(updatedShareCode);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteShareCode(@RequestHeader("X-USER-EMAIL") String email,
                                             @PathVariable String id) {
        shareCodeService.deleteShareCode(getUserEmailFromHeader(email), id);
        return ResponseEntity.ok("Share Code snippet deleted successfully");
    }

}
