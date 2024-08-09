package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Parents")
public class Parent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long parentId;

    @OneToOne(mappedBy = "parent")
    private User user;

    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private String suggestions;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

	public Parent() {
		super();
	}
	
	

	public Parent(Long parentId) {
		super();
		this.parentId = parentId;
	}



	public Parent(User user, String name, String email, String phoneNumber, String address, String suggestions,
			Student student) {
		super();
		this.user = user;
		this.name = name;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.suggestions = suggestions;
		this.student = student;
	}

	public Parent(Long parentId, User user, String name, String email, String phoneNumber, String address,
			String suggestions, Student student) {
		super();
		this.parentId = parentId;
		this.user = user;
		this.name = name;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.suggestions = suggestions;
		this.student = student;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSuggestions() {
		return suggestions;
	}

	public void setSuggestions(String suggestions) {
		this.suggestions = suggestions;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	@Override
	public String toString() {
		return "Parent [parentId=" + parentId + ", user=" + user + ", name=" + name + ", email=" + email
				+ ", phoneNumber=" + phoneNumber + ", address=" + address + ", suggestions=" + suggestions
				+ ", student=" + student + "]";
	}

    
}

