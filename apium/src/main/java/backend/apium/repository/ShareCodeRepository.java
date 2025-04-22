package backend.apium.repository;

import backend.apium.model.ShareCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShareCodeRepository extends JpaRepository<ShareCode, String> {
    List<ShareCode> findByUserId(String userId);
}
