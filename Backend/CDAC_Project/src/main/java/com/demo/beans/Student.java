package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;

    private String name;
    private String dateOfBirth;
    private String address;
    private String phoneNumber;
    private String email;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String profilePic;
    private String admissionDate;

    @OneToOne(mappedBy = "student")
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "class_id") // Column name should match the database schema
    private Classes classes;


    public enum Gender {
        Male, Female, OTHER
    }

	public Student() {
		super();
	}

	

	public Student(Long studentId, String name, String dateOfBirth, String address, String phoneNumber, String email,
			Gender gender, String profilePic, String admissionDate, User user, Classes classes) {
		super();
		this.studentId = studentId;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.gender = gender;
		this.profilePic = profilePic;
		this.admissionDate = admissionDate;
		this.user = user;
		this.classes = classes;
	}



	public Student(String name, String dateOfBirth, String address, String phoneNumber, String email, Gender gender,
			String profilePic, String admissionDate, User user, Classes classes) {
		super();
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.gender = gender;
		this.profilePic = profilePic;
		this.admissionDate = admissionDate;
		this.user = user;
		this.classes = classes;
	}



	public Long getStudentId() {
		return studentId;
	}

	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public String getAdmissionDate() {
		return admissionDate;
	}

	public void setAdmissionDate(String admissionDate) {
		this.admissionDate = admissionDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	public Classes getClasses() {
		return classes;
	}



	public void setClasses(Classes classes) {
		this.classes = classes;
	}



	@Override
	public String toString() {
		return "Student [studentId=" + studentId + ", name=" + name + ", dateOfBirth=" + dateOfBirth + ", address="
				+ address + ", phoneNumber=" + phoneNumber + ", email=" + email + ", gender=" + gender + ", profilePic="
				+ profilePic + ", admissionDate=" + admissionDate + ", user=" + user + "]";
	}
    
    
}
