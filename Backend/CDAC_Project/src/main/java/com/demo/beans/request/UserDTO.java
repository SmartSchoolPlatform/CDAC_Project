package com.demo.beans.request;

import com.demo.beans.User.Role;

public class UserDTO {
    private String username;
    private String password;
    private Role role;
    private String frvQuestion;
    private String answer;
	
    
    public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public String getFrvQuestion() {
		return frvQuestion;
	}
	public void setFrvQuestion(String frvQuestion) {
		this.frvQuestion = frvQuestion;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}

    // Getters and Setters
    
}

