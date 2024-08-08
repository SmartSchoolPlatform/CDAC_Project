package com.demo.beans;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Classes")
public class Classes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long classId;

    private String className;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private Staff staff;

    private Integer totalClassesTakes;

    @OneToMany(mappedBy = "classes")
    @JsonIgnore
    private Set<StudentClasses> studentClasses;

	public Classes() {
		super();
	}

	
	public Classes(Long classId) {
		super();
		this.classId = classId;
	}


	public Classes(String className, Staff staff, Integer totalClassesTakes, Set<StudentClasses> studentClasses) {
		super();
		this.className = className;
		this.staff = staff;
		this.totalClassesTakes = totalClassesTakes;
		this.studentClasses = studentClasses;
	}

	public Classes(Long classId, String className, Staff staff, Integer totalClassesTakes,
			Set<StudentClasses> studentClasses) {
		super();
		this.classId = classId;
		this.className = className;
		this.staff = staff;
		this.totalClassesTakes = totalClassesTakes;
		this.studentClasses = studentClasses;
	}

	public Long getClassId() {
		return classId;
	}

	public void setClassId(Long classId) {
		this.classId = classId;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public Staff getStaff() {
		return staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

	public Integer getTotalClassesTakes() {
		return totalClassesTakes;
	}

	public void setTotalClassesTakes(Integer totalClassesTakes) {
		this.totalClassesTakes = totalClassesTakes;
	}

	public Set<StudentClasses> getStudentClasses() {
		return studentClasses;
	}

	public void setStudentClasses(Set<StudentClasses> studentClasses) {
		this.studentClasses = studentClasses;
	}

	@Override
	public String toString() {
		return "Classes [classId=" + classId + ", className=" + className + ", staff=" + staff + ", totalClassesTakes="
				+ totalClassesTakes + ", studentClasses=" + studentClasses + "]";
	}





    
}

