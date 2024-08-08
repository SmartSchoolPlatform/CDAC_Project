package com.demo.service;

import java.util.List;
import com.demo.beans.User;

public interface UserService {
    List<User> getAllUsers();
    User getById(long id);
    int addUser(User user);
    void deleteById(long id);
	User findByUsername(String username);
}
