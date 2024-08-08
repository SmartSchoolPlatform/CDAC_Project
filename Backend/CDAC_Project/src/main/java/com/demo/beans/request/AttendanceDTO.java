package com.demo.beans.request;


public class AttendanceDTO {


    private Long classId;


    private Long studentId;


    private Integer count;

    // Constructors
    public AttendanceDTO() {
    }

    public AttendanceDTO(Long classId, Long studentId, Integer count) {
        this.classId = classId;
        this.studentId = studentId;
        this.count = count;
    }

    // Getters and Setters
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

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "AttendanceDTO{" +
                "classId=" + classId +
                ", studentId=" + studentId +
                ", count=" + count +
                '}';
    }
}
