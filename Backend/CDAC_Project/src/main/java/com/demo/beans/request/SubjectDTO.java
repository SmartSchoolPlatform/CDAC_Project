package com.demo.beans.request;

public class SubjectDTO {
    private Long subjectId;
    private String subjectName;
    private Long classId;
    private Long staffId;
    
    
	public SubjectDTO() {
		super();
	}


	public SubjectDTO(String subjectName, Long classId, Long staffId) {
		super();
		this.subjectName = subjectName;
		this.classId = classId;
		this.staffId = staffId;
	}


	public SubjectDTO(Long subjectId, String subjectName, Long classId, Long staffId) {
		super();
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.classId = classId;
		this.staffId = staffId;
	}


	public Long getSubjectId() {
		return subjectId;
	}


	public void setSubjectId(Long subjectId) {
		this.subjectId = subjectId;
	}


	public String getSubjectName() {
		return subjectName;
	}


	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}


	public Long getClassId() {
		return classId;
	}


	public void setClassId(Long classId) {
		this.classId = classId;
	}


	public Long getStaffId() {
		return staffId;
	}


	public void setStaffId(Long staffId) {
		this.staffId = staffId;
	}


	@Override
	public String toString() {
		return "SubjectDTO [subjectId=" + subjectId + ", subjectName=" + subjectName + ", classId=" + classId
				+ ", staffId=" + staffId + "]";
	}
    
    
}

