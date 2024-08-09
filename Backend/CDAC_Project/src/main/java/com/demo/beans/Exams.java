package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Exams")
public class Exams {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exam_id")
    private Long examId;
    
    @Column(name = "exam_name")
    private String examName;

    @Column(name = "exam_date")
    private String examDate;

    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subjects subjects;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private Classes classes;

    public Exams() {
        super();
    }

    public Exams(String examName, String examDate, Subjects subjects, Classes classes) {
        super();
        this.examName = examName;
        this.examDate = examDate;
        this.subjects = subjects;
        this.classes = classes;
    }

    public Exams(Long examId, String examName, String examDate, Subjects subjects, Classes classes) {
        super();
        this.examId = examId;
        this.examName = examName;
        this.examDate = examDate;
        this.subjects = subjects;
        this.classes = classes;
    }

    public Long getExamId() {
        return examId;
    }

    public void setExamId(Long examId) {
        this.examId = examId;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public String getExamDate() {
        return examDate;
    }

    public void setExamDate(String examDate) {
        this.examDate = examDate;
    }

    public Subjects getSubjects() {
        return subjects;
    }

    public void setSubjects(Subjects subjects) {
        this.subjects = subjects;
    }

    public Classes getClasses() {
        return classes;
    }

    public void setClasses(Classes classes) {
        this.classes = classes;
    }

    @Override
    public String toString() {
        return "Exams [examId=" + examId + ", examName=" + examName + ", examDate=" + examDate + ", subjects="
                + subjects + ", classes=" + classes + "]";
    }
}
