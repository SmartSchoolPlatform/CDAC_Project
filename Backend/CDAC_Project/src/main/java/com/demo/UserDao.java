package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.demo.beans.User;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

	User findByUsername(String username);

	//List<User> findAll();
    // Additional custom queries can be added here if needed
}
