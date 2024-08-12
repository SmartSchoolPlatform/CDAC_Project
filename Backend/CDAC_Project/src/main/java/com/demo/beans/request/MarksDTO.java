package com.demo.beans.request;

public class MarksDTO {
	private Long markId;
    private String examDate;
    private String examName;
    private Double marks;
    private Long classId;
    private Long subjectId;
    private Long studentId;
	public Long getMarkId() {
		return markId;
	}
	public void setMarkId(Long markId) {
		this.markId = markId;
	}
	public String getExamDate() {
		return examDate;
	}
	public void setExamDate(String examDate) {
		this.examDate = examDate;
	}
	public String getExamName() {
		return examName;
	}
	public void setExamName(String examName) {
		this.examName = examName;
	}
	public Double getMarks() {
		return marks;
	}
	public void setMarks(Double marks) {
		this.marks = marks;
	}
	public Long getClassId() {
		return classId;
	}
	public void setClassId(Long classId) {
		this.classId = classId;
	}
	public Long getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(Long subjectId) {
		this.subjectId = subjectId;
	}
	public Long getStudentId() {
		return studentId;
	}
	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}
	@Override
	public String toString() {
		return "MarksDTO [markId=" + markId + ", examDate=" + examDate + ", examName=" + examName + ", marks=" + marks
				+ ", classId=" + classId + ", subjectId=" + subjectId + ", studentId=" + studentId + "]";
	}
    
    

}
