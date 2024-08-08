package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Attendance")
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attendanceId;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private Classes classes;

    private Integer count;

	public Attendance() {
		super();
	}

	public Attendance(Student student, Classes classes, Integer count) {
		super();
		this.student = student;
		this.classes = classes;
		this.count = count;
	}

	public Attendance(Long attendanceId, Student student, Classes classes, Integer count) {
		super();
		this.attendanceId = attendanceId;
		this.student = student;
		this.classes = classes;
		this.count = count;
	}

	public Long getAttendanceId() {
		return attendanceId;
	}

	public void setAttendanceId(Long attendanceId) {
		this.attendanceId = attendanceId;
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

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Attendance [attendanceId=" + attendanceId + ", student=" + student + ", classes=" + classes + ", count="
				+ count + "]";
	}

    
}

