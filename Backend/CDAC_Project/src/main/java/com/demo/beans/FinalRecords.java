package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Final_Records")
public class FinalRecords {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long finalRecordId;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private Classes classes;

    private String goodAt;
    private String weakAt;
    private String suggestions;
	
    public FinalRecords() {
		super();
	}

	public FinalRecords(Student student, Classes classes, String goodAt, String weakAt, String suggestions) {
		super();
		this.student = student;
		this.classes = classes;
		this.goodAt = goodAt;
		this.weakAt = weakAt;
		this.suggestions = suggestions;
	}

	public FinalRecords(Long finalRecordId, Student student, Classes classes, String goodAt, String weakAt,
			String suggestions) {
		super();
		this.finalRecordId = finalRecordId;
		this.student = student;
		this.classes = classes;
		this.goodAt = goodAt;
		this.weakAt = weakAt;
		this.suggestions = suggestions;
	}

	public Long getFinalRecordId() {
		return finalRecordId;
	}

	public void setFinalRecordId(Long finalRecordId) {
		this.finalRecordId = finalRecordId;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Classes getClasses() {
		return classes;
	}

	public void setClasses(Classes classes) {
		this.classes = classes;
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

	@Override
	public String toString() {
		return "FinalRecords [finalRecordId=" + finalRecordId + ", student=" + student + ", classes=" + classes
				+ ", goodAt=" + goodAt + ", weakAt=" + weakAt + ", suggestions=" + suggestions + "]";
	}

    
    
}

