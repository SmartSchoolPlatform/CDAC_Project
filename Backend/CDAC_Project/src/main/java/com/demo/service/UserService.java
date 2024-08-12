package com.demo.service;

import java.util.List;
import com.demo.beans.User;
import com.demo.beans.request.UserDTO;

public interface UserService {
    List<User> getAllUsers();
    User getById(long id);
    User addUser(User user);
    void deleteById(long id);
	User findByUsername(String username);
	User findByUsernameAndFrvQuestionAndAnswer(String username, String frvQuestion, String answer);
	Long createUser(UserDTO userDTO);
}
