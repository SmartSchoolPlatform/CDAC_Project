package com.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.User;
import com.demo.beans.request.UserDTO;
import com.demo.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> userList = userService.getAllUsers();
        return ResponseEntity.ok(userList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable long id) {
        User user = userService.getById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
    	User foundUser = userService.findByUsername(user.getUsername());
    	System.out.println("\n\n\n"+foundUser+"\n\n\n");
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok(foundUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    
    @GetMapping("/forgot-password/{username}")
    public ResponseEntity<User> getSecurityQuestion(@PathVariable String username) {
        User user = userService.findByUsername(username);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody User user) {
    	System.out.println(user);
        User existingUser = userService.findByUsernameAndFrvQuestionAndAnswer(user.getUsername(), user.getFrvQuestion(), user.getAnswer());
        if (existingUser != null) {
            existingUser.setPassword(user.getPassword());
            userService.addUser(existingUser);
            return ResponseEntity.ok("Password updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid security question or answer");
        }
    }
    
//    @PostMapping("/create")
//    public ResponseEntity<Long> createUser(@RequestBody UserDTO userDTO) {
//        Long userId = userService.createUser(userDTO);
//        return ResponseEntity.ok(userId);
//    }

//    @PostMapping("/create")
//    public ResponseEntity<Long> createUser(@RequestBody UserDTO userDTO) {
//        try {
//            User user = new User();
//            user.setUsername(userDTO.getUsername());
//            user.setPassword(userDTO.getPassword());
//            user.setRole(userDTO.getRole());
//            user.setFrvQuestion(userDTO.getFrvQuestion());
//            user.setAnswer(userDTO.getAnswer());
//
//            User savedUser = userService.addUser(user);
//            return ResponseEntity.ok(savedUser.getUserId());
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
    
    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody UserDTO userDTO) {
        try {
            // Create User with default values
            User user = new User();
            user.setAnswer(userDTO.getAnswer());
            user.setFrvQuestion(userDTO.getFrvQuestion());
            user.setPassword(userDTO.getPassword()); // Set password
            user.setRole(userDTO.getRole());
            user.setUsername(userDTO.getUsername()); // This will be updated later

            // Save User
            User savedUser = userService.addUser(user);

            // Update User to set username as user_id
            savedUser.setUsername(String.valueOf(savedUser.getUserId()));
            User updatedUser = userService.addUser(savedUser);

            // Return updated User
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable long id) {
        userService.deleteById(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
