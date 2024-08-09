package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Marks")
public class Marks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long markId;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "exam_id")
    private Exams exams;

    private Double marks;

	public Marks() {
		super();
	}

	public Marks(Student student, Exams exams, Double marks) {
		super();
		this.student = student;
		this.exams = exams;
		this.marks = marks;
	}

	public Marks(Long markId, Student student, Exams exams, Double marks) {
		super();
		this.markId = markId;
		this.student = student;
		this.exams = exams;
		this.marks = marks;
	}

	public Long getMarkId() {
		return markId;
	}

	public void setMarkId(Long markId) {
		this.markId = markId;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Exams getExams() {
		return exams;
	}

	public void setExams(Exams exams) {
		this.exams = exams;
	}

	public Double getMarks() {
		return marks;
	}

	public void setMarks(Double marks) {
		this.marks = marks;
	}

	@Override
	public String toString() {
		return "Marks [markId=" + markId + ", student=" + student + ", exams=" + exams + ", marks=" + marks + "]";
	}

    
}
