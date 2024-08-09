package com.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.beans.User;
import com.demo.dao.UserDao;
import com.demo.service.UserService;

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
    public int addUser(User user) {
        UserDao.save(user);
        return 1; // 1 for success
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
}
