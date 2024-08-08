package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.security.auth.Subject;

@Entity
@Table(name = "Assignments")
public class Assignments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assignmentId;

    private String assignmentName;
    private String assignmentDate;

    @ManyToOne
    @JoinColumn(name = "subject_id") // Foreign key column in the Assignments table
    private Subjects subject;

    public Assignments() {
        super();
    }

    public Assignments(String assignmentName, String assignmentDate, Subjects subject) {
        super();
        this.assignmentName = assignmentName;
        this.assignmentDate = assignmentDate;
        this.subject = subject;
    }

    public Assignments(Long assignmentId, String assignmentName, String assignmentDate, Subjects subject) {
        super();
        this.assignmentId = assignmentId;
        this.assignmentName = assignmentName;
        this.assignmentDate = assignmentDate;
        this.subject = subject;
    }

    public Long getAssignmentId() {
        return assignmentId;
    }

    public void setAssignmentId(Long assignmentId) {
        this.assignmentId = assignmentId;
    }

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
    }

    public String getAssignmentDate() {
        return assignmentDate;
    }

    public void setAssignmentDate(String assignmentDate) {
        this.assignmentDate = assignmentDate;
    }

    public Subjects getSubject() {
        return subject;
    }

    public void setSubject(Subjects subject2) {
        this.subject = subject2;
    }

    @Override
    public String toString() {
        return "Assignments [assignmentId=" + assignmentId + ", assignmentName=" + assignmentName + ", assignmentDate="
                + assignmentDate + ", subject=" + subject + "]";
    }
}
