package com.demo.beans.request;

import com.demo.beans.Student.Gender;

public class StudentDTO {
    private String name;
    private String dateOfBirth;
    private Long classId;
    private String address;
    private String admissionDate;
    private String email;
    private String gender;
    private String phoneNumber;
    private String profilePic;
    private Long userId; // Added for userId
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
	public Long getClassId() {
		return classId;
	}
	public void setClassId(Long classId) {
		this.classId = classId;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAdmissionDate() {
		return admissionDate;
	}
	public void setAdmissionDate(String admissionDate) {
		this.admissionDate = admissionDate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getProfilePic() {
		return profilePic;
	}
	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	
	@Override
	public String toString() {
		return "StudentDTO [name=" + name + ", dateOfBirth=" + dateOfBirth + ", classId=" + classId + ", address="
				+ address + ", admissionDate=" + admissionDate + ", email=" + email + ", gender=" + gender
				+ ", phoneNumber=" + phoneNumber + ", profilePic=" + profilePic + ", userId=" + userId + "]";
	}

    // Getters and Setters
    
    
}

