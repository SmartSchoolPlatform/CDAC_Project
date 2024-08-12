package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.User;
import com.demo.beans.request.UserDTO;
import com.demo.dao.UserDao;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao UserDao;

    @Override
    public List<User> getAllUsers() {
        return UserDao.findAll();
    }

    @Override
    public User getById(long id) {
        return UserDao.findById(id).orElse(null);
    }

    @Override
    public User addUser(User user) {
        
        return UserDao.save(user);// 1 for success
    }

    @Override
    public void deleteById(long id) {
        UserDao.deleteById(id);
    }

	@Override
	public User findByUsername(String username) {
		// TODO Auto-generated method stub
		return UserDao.findByUsername(username);
	}
	
    public User findByUsernameAndFrvQuestionAndAnswer(String username, String frvQuestion, String answer) {
        return UserDao.findByUsernameAndFrvQuestionAndAnswer(username, frvQuestion, answer);
    }
    
    public Long createUser(UserDTO userDTO) {
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setRole(userDTO.getRole());
        user.setFrvQuestion(userDTO.getFrvQuestion());
        user.setAnswer(userDTO.getAnswer());
        UserDao.save(user);
        return user.getUserId(); // Return generated user_id
    }
}
