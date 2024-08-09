package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Assignment_Submissions")
public class AssignmentSubmissions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assignmentSubmissionId;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "assignment_id")
    private Assignments assignments;

    private String submissionDate;
    private Double marksObtained;
	
    
    public AssignmentSubmissions() {
		super();
	}


	public AssignmentSubmissions(Student student, Assignments assignments, String submissionDate,
			Double marksObtained) {
		super();
		this.student = student;
		this.assignments = assignments;
		this.submissionDate = submissionDate;
		this.marksObtained = marksObtained;
	}


	public AssignmentSubmissions(Long assignmentSubmissionId, Student student, Assignments assignments,
			String submissionDate, Double marksObtained) {
		super();
		this.assignmentSubmissionId = assignmentSubmissionId;
		this.student = student;
		this.assignments = assignments;
		this.submissionDate = submissionDate;
		this.marksObtained = marksObtained;
	}


	public Long getAssignmentSubmissionId() {
		return assignmentSubmissionId;
	}


	public void setAssignmentSubmissionId(Long assignmentSubmissionId) {
		this.assignmentSubmissionId = assignmentSubmissionId;
	}


	public Student getStudent() {
		return student;
	}


	public void setStudent(Student student) {
		this.student = student;
	}


	public Assignments getAssignments() {
		return assignments;
	}


	public void setAssignments(Assignments assignments) {
		this.assignments = assignments;
	}


	public String getSubmissionDate() {
		return submissionDate;
	}


	public void setSubmissionDate(String submissionDate) {
		this.submissionDate = submissionDate;
	}


	public Double getMarksObtained() {
		return marksObtained;
	}


	public void setMarksObtained(Double marksObtained) {
		this.marksObtained = marksObtained;
	}


	@Override
	public String toString() {
		return "AssignmentSubmissions [assignmentSubmissionId=" + assignmentSubmissionId + ", student=" + student
				+ ", assignments=" + assignments + ", submissionDate=" + submissionDate + ", marksObtained="
				+ marksObtained + "]";
	}

    
}

