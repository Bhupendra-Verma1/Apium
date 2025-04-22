package backend.apium.repository;

import backend.apium.model.AISuggestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AISuggestionRepository extends JpaRepository<AISuggestion, String> {
}
