package com.demo.service;

import com.demo.beans.Student;
import java.util.List;

import org.springframework.data.repository.query.Param;

public interface StudentService {
    List<Student> getAllStudents();
    Student getStudentById(Long studentId);
    Student saveStudent(Student student);
    void deleteStudent(Long studentId);
    List<Long> findClassIdsByStudentIds(Long studentIds);
    List<Student> findStudentsByClassId(Long classId);
}
