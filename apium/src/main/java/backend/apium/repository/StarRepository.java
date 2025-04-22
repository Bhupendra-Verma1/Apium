package backend.apium.repository;

import backend.apium.model.Star;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StarRepository extends JpaRepository<Star, String> {

}
