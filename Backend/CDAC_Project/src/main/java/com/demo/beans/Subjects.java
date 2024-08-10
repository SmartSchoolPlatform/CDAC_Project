package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Subjects")
public class Subjects {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subjectId;

    private String subjectName;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private Classes classes;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private Staff staff;

	public Subjects() {
		super();
	}

	public Subjects(String subjectName, Classes classes, Staff staff) {
		super();
		this.subjectName = subjectName;
		this.classes = classes;
		this.staff = staff;
	}

	public Subjects(Long subjectId, String subjectName, Classes classes, Staff staff) {
		super();
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.classes = classes;
		this.staff = staff;
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

	public Classes getClasses() {
		return classes;
	}

	public void setClasses(Classes classes) {
		this.classes = classes;
	}

	public Staff getStaff() {
		return staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

	@Override
	public String toString() {
		return "Subjects [subjectId=" + subjectId + ", subjectName=" + subjectName + ", classes=" + classes + ", staff="
				+ staff + "]";
	}

    
}
