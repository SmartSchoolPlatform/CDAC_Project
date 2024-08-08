package com.demo.service;

import com.demo.beans.StudentClasses;
import java.util.List;

public interface StudentClassesService {
    List<StudentClasses> getAllStudentClasses();
    StudentClasses getStudentClassById(Long studentClassId);
    StudentClasses saveStudentClass(StudentClasses studentClass);
    void deleteStudentClass(Long studentClassId);
}
