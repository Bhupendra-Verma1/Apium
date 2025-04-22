package backend.apium.repository;

import backend.apium.model.Code;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CodeRepository extends JpaRepository<Code, String> {
    List<Code> findByUserId(String userId);
}
