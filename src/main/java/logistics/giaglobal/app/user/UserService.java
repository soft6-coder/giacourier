package logistics.giaglobal.app.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public Optional<User> getUser(String userName, String password) {
		return userRepository.findByUserNameAndPassword(userName, password);
	}

}
