package com.demo.beans;

import javax.persistence.*;
import java.util.Optional;

@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String username; // This will be student_id, parent_id, or staff_id

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    private String frvQuestion;
    private String answer;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "studentId")
    private Student student;

    @OneToOne
    @JoinColumn(name = "parent_id", referencedColumnName = "parentId")
    private Parent parent;

    @OneToOne
    @JoinColumn(name = "staff_id", referencedColumnName = "staffId")
    private Staff staff;


    public enum Role {
        Student, Parent, Staff
    }
    
    


	public User() {
		super();
	}
	
	


	public User(String password, Role role, String frvQuestion, String answer, Student student, Parent parent,
			Staff staff) {
		super();
		this.password = password;
		this.role = role;
		this.frvQuestion = frvQuestion;
		this.answer = answer;
		this.student = student;
		this.parent = parent;
		this.staff = staff;
	}




	public User(String username, String password, Role role, String frvQuestion, String answer, Student student,
			Parent parent, Staff staff) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
		this.frvQuestion = frvQuestion;
		this.answer = answer;
		this.student = student;
		this.parent = parent;
		this.staff = staff;
	}




	public User(Long userId, String username, String password, Role role, String frvQuestion, String answer,
			Student student, Parent parent, Staff staff) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.role = role;
		this.frvQuestion = frvQuestion;
		this.answer = answer;
		this.student = student;
		this.parent = parent;
		this.staff = staff;
	}




	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


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


	public Student getStudent() {
		return student;
	}


	public void setStudent(Student student) {
		this.student = student;
	}


	public Parent getParent() {
		return parent;
	}


	public void setParent(Parent parent) {
		this.parent = parent;
	}


	public Staff getStaff() {
		return staff;
	}


	public void setStaff(Staff staff) {
		this.staff = staff;
	}




	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", role=" + role
				+ ", frvQuestion=" + frvQuestion + ", answer=" + answer + ", student=" + student + ", parent=" + parent
				+ ", staff=" + staff + "]";
	}
    
    
    
}

