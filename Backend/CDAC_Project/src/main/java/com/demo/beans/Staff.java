package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Staff")
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long staffId;

    @Enumerated(EnumType.STRING)
    private Designation designation;

    private String name;
    private String department;
    private String phoneNumber;
    private String email;
    private String dateOfBirth;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String educationDetails;
    private String profilePic;

    @OneToOne(mappedBy = "staff")
    private User user;

    // Getters and Setters

    public enum Designation {
        Teacher, Admin
    }

    public enum Gender {
        Male, Female, Other
    }

	public Staff() {
		super();
	}

	public Staff(Designation designation, String name, String department, String phoneNumber, String email,
			String dateOfBirth, Gender gender, String educationDetails, String profilePic, User user) {
		super();
		this.designation = designation;
		this.name = name;
		this.department = department;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.educationDetails = educationDetails;
		this.profilePic = profilePic;
		this.user = user;
	}

	public Staff(Long staffId, Designation designation, String name, String department, String phoneNumber,
			String email, String dateOfBirth, Gender gender, String educationDetails, String profilePic, User user) {
		super();
		this.staffId = staffId;
		this.designation = designation;
		this.name = name;
		this.department = department;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.educationDetails = educationDetails;
		this.profilePic = profilePic;
		this.user = user;
	}

	public Long getStaffId() {
		return staffId;
	}

	public void setStaffId(Long staffId) {
		this.staffId = staffId;
	}

	public Designation getDesignation() {
		return designation;
	}

	public void setDesignation(Designation designation) {
		this.designation = designation;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
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

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getEducationDetails() {
		return educationDetails;
	}

	public void setEducationDetails(String educationDetails) {
		this.educationDetails = educationDetails;
	}

	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Staff [staffId=" + staffId + ", designation=" + designation + ", name=" + name + ", department="
				+ department + ", phoneNumber=" + phoneNumber + ", email=" + email + ", dateOfBirth=" + dateOfBirth
				+ ", gender=" + gender + ", educationDetails=" + educationDetails + ", profilePic=" + profilePic
				+ ", user=" + user + "]";
	}
    
    
    
    
}

