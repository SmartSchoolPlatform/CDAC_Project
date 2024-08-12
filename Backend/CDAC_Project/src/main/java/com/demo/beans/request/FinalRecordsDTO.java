package com.demo.beans.request;

public class FinalRecordsDTO {
    private Long finalRecordId;
    private String goodAt;
    private String weakAt;
    private String suggestions;
    private Long classId;
    private Long studentId;
	public Long getFinalRecordId() {
		return finalRecordId;
	}
	public void setFinalRecordId(Long finalRecordId) {
		this.finalRecordId = finalRecordId;
	}
	public String getGoodAt() {
		return goodAt;
	}
	public void setGoodAt(String goodAt) {
		this.goodAt = goodAt;
	}
	public String getWeakAt() {
		return weakAt;
	}
	public void setWeakAt(String weakAt) {
		this.weakAt = weakAt;
	}
	public String getSuggestions() {
		return suggestions;
	}
	public void setSuggestions(String suggestions) {
		this.suggestions = suggestions;
	}
	public Long getClassId() {
		return classId;
	}
	public void setClassId(Long classId) {
		this.classId = classId;
	}
	public Long getStudentId() {
		return studentId;
	}
	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}
    
    
}