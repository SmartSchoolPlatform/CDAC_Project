package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.beans.Attendance;

public interface AttendanceDao extends JpaRepository<Attendance, Long> {
    // Use the correct property paths for the relationships
    Attendance findByClassesClassIdAndStudentStudentId(Long classId, Long studentId);
    
    List<Attendance> findByStudent_StudentId(Long studentId);
}
