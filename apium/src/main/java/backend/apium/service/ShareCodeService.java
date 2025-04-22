package backend.apium.service;

import backend.apium.model.Code;
import backend.apium.model.ShareCode;
import backend.apium.model.User;
import backend.apium.repository.ShareCodeRepository;
import backend.apium.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ShareCodeService {

    private ShareCodeRepository shareCodeRepository;
    private UserRepository userRepository;
    private CodeService codeService;

    public ShareCodeService(ShareCodeRepository shareCodeRepository, UserRepository userRepository, CodeService codeService) {
        this.shareCodeRepository = shareCodeRepository;
        this.userRepository = userRepository;
        this.codeService = codeService;
    }


    // create shared code
    public ShareCode createShareCode(String email, ShareCode shareCode) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("user not found"));

        ShareCode newShareCode = new ShareCode();
        newShareCode.setId(UUID.randomUUID().toString());
        newShareCode.setDescription(shareCode.getDescription());
        newShareCode.setUser(user);
        newShareCode.setCode(shareCode.getCode());
        newShareCode.getCode().setId(UUID.randomUUID().toString());
        newShareCode.getCode().setUser(user);

        return shareCodeRepository.save(newShareCode);
    }

    // get all shared code by user
    public List<ShareCode> getUserShareCodes(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("user not found"));

        return shareCodeRepository.findByUserId(user.getId());
    }

    // get all shared code
    public List<ShareCode> getAllShareCodes() {
        return shareCodeRepository.findAll();
    }

    // get all shared code by id
    public Optional<ShareCode> getShareCodeById(String id){
        return shareCodeRepository.findById(id);
    }


    // update shared code
    public ShareCode updateShareCode(String email, String id, ShareCode updatedShareCode) {
        ShareCode existingShareCode = shareCodeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("shared snippet not found"));

        if(!existingShareCode.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized to update this shared snippet");
        }

        existingShareCode.getCode().setTitle(updatedShareCode.getCode().getTitle());
        existingShareCode.getCode().setLanguage(updatedShareCode.getCode().getLanguage());
        existingShareCode.getCode().setContent(updatedShareCode.getCode().getContent());
        existingShareCode.getCode().setUpdatedAt(LocalDateTime.now());
        existingShareCode.setDescription(updatedShareCode.getDescription());

        return shareCodeRepository.save(existingShareCode);
    }


    // Delete shared code
    public void deleteShareCode(String email, String id){
        ShareCode existingShareCode = shareCodeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("shared snippet not found"));

        if(!existingShareCode.getUser().getEmail().equals(email)) {
            throw new RuntimeException("Unauthorized to delete this share snippet");
        }

        shareCodeRepository.delete(existingShareCode);
    }

}
