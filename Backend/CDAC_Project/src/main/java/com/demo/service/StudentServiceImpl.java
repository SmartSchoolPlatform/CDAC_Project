package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Classes;
import com.demo.beans.Student;
import com.demo.beans.request.StudentDTO;
import com.demo.dao.ClassesDao;
import com.demo.dao.StudentDao;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentDao studentDao;
    
    @Autowired
    private ClassesDao classesDao;
    
    @Autowired
    private UserService userService;

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
    public void createStudent(StudentDTO studentDTO) {
        Student student = new Student();
        student.setName(studentDTO.getName());
        student.setDateOfBirth(studentDTO.getDateOfBirth());
        student.setClasses(classesDao.getById(studentDTO.getClassId()));
        student.setAddress(studentDTO.getAddress());
        student.setAdmissionDate(studentDTO.getAdmissionDate());
        student.setEmail(studentDTO.getEmail());
        student.setGender(Student.Gender.valueOf(studentDTO.getGender()));
        student.setPhoneNumber(studentDTO.getPhoneNumber());
        student.setProfilePic(studentDTO.getProfilePic());
        student.setUser(userService.getById( studentDTO.getUserId())); // Set the user_id
        studentDao.save(student);
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
    
    
    public void upgradeStudents() {
        // Get all students
        List<Student> students = studentDao.findAll();

        for (Student student : students) {
            Classes currentClass = student.getClasses();
            Classes nextClass = getNextClass(currentClass);

            if (nextClass != null) {
                student.setClasses(nextClass);
                studentDao.save(student); // Save updated student
            }
        }
    }

    private Classes getNextClass(Classes currentClass) {
        String className = currentClass.getClassName();
        Long currentClassId = currentClass.getClassId();

        // Define the logic to find the next class based on class ID or name
        if (className.contains("Grade")) {
            // Handle grade upgrade (e.g., 5th to 6th)
            long nextClassId = currentClassId + 1;
            return classesDao.findById(nextClassId).orElse(null);
        } else if (className.contains("Hindi") || className.contains("Sanskrit")) {
            // Handle subject upgrade (e.g., 8th Grade (Hindi) to 9th Grade (Hindi))
            String nextClassName = className.replaceFirst("8th Grade", "9th Grade");
            
            return classesDao.findByName(nextClassName);
        }

        return null;
    }
    
    
}
