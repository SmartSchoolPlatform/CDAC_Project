package com.demo.service;

import com.demo.beans.Student;
import com.demo.dao.StudentDao;
import com.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentDao studentDao;

    @Override
    public List<Student> getAllStudents() {
        return studentDao.findAll();
    }

    @Override
    public Student getStudentById(Long studentId) {
        return studentDao.findById(studentId).orElse(null);
    }

    @Override
    public Student saveStudent(Student student) {
        return studentDao.save(student);
    }

    @Override
    public void deleteStudent(Long studentId) {
        studentDao.deleteById(studentId);
    }

	@Override
	public List<Long> findClassIdsByStudentIds(Long studentIds) {
		// TODO Auto-generated method stub
		return studentDao.findClassIdsByStudentIds(studentIds);
	}
	
    @Override
    public List<Student> findStudentsByClassId(Long classId) {
        return studentDao.findStudentsByClassId(classId);
    }
}
