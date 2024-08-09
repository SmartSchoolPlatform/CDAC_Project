package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Student_Classes")
public class StudentClasses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentClassId;

    @ManyToOne
    @JoinColumn(name = "student_id")
    @JsonIgnore
    private Student student;

    @ManyToOne
    @JoinColumn(name = "class_id")
    @JsonIgnore
    private Classes classes;

	public StudentClasses() {
		super();
	}

	public StudentClasses(Student student, Classes classes) {
		super();
		this.student = student;
		this.classes = classes;
	}

	public StudentClasses(Long studentClassId, Student student, Classes classes) {
		super();
		this.studentClassId = studentClassId;
		this.student = student;
		this.classes = classes;
	}

	public Long getStudentClassId() {
		return studentClassId;
	}

	public void setStudentClassId(Long studentClassId) {
		this.studentClassId = studentClassId;
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

	@Override
	public String toString() {
		return "StudentClasses [studentClassId=" + studentClassId + ", student=" + student + ", classes=" + classes
				+ "]";
	}

    
}
