package com.demo.service;

import com.demo.beans.StudentClasses;
import com.demo.dao.StudentClassesDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentClassesServiceImpl implements StudentClassesService {

    @Autowired
    private StudentClassesDao studentClassesDao;

    @Override
    public List<StudentClasses> getAllStudentClasses() {
        return studentClassesDao.findAll();
    }

    @Override
    public StudentClasses getStudentClassById(Long studentClassId) {
        return studentClassesDao.findById(studentClassId).orElse(null);
    }

    @Override
    public StudentClasses saveStudentClass(StudentClasses studentClass) {
        return studentClassesDao.save(studentClass);
    }

    @Override
    public void deleteStudentClass(Long studentClassId) {
        studentClassesDao.deleteById(studentClassId);
    }
}
