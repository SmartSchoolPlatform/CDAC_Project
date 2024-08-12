package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Classes;
import com.demo.beans.Student;
import com.demo.beans.Student.Gender;
import com.demo.beans.request.StudentDTO;
import com.demo.service.ClassesService;
import com.demo.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;
    
    @Autowired
    private ClassesService classesService;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable("id") Long id) {
        Student student = studentService.getStudentById(id);
        if (student == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(student);
    }
    
    @GetMapping("/class/{classId}")
    public ResponseEntity<List<Student>> getStudentsByClassId(@PathVariable("classId") Long classId) {
        List<Student> students = studentService.findStudentsByClassId(classId);
        if (students.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(students);
    }
    

//    @PostMapping
//    public Student createStudent(@RequestBody Student student) {
//    	System.out.println("\n\n\n new record"+student+"\n\n\n");
//        return studentService.saveStudent(student);
//    }
    
    
    @PostMapping("/create")
    public ResponseEntity<Student> createStudent(@RequestBody StudentDTO studentDTO) {
        // Convert DTO to Entity
    	try {
    	System.out.println(studentDTO);
        Student student = new Student();
        student.setName(studentDTO.getName());
        student.setDateOfBirth(studentDTO.getDateOfBirth());
        student.setAddress(studentDTO.getAddress());
        student.setPhoneNumber(studentDTO.getPhoneNumber());
        student.setEmail(studentDTO.getEmail());
        student.setGender(Gender.valueOf(studentDTO.getGender()));
        student.setProfilePic(studentDTO.getProfilePic());
        student.setAdmissionDate(studentDTO.getAdmissionDate());
        //student.setClasses(classesService.getById(studentDTO.getClassId()));
        System.out.println("\n\n\n new record"+student+"\n\n\n");
        if (studentDTO.getClassId()!= null) {
            Classes classes = classesService.getById(studentDTO.getClassId());
            if (classes != null) {
                student.setClasses(classes);
            } else {
                // Handle case where class is not found (optional)
                return ResponseEntity.badRequest().body(null); // or throw an exception
            }
        }

        // Save Student
        Student savedStudent = studentService.saveStudent(student);

        // Return Response
        return ResponseEntity.ok(savedStudent);
    } catch (Exception e) {
        e.printStackTrace();
        // Return error response
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
    }


    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable("id") Long id, @RequestBody Student student) {
        Student existingStudent = studentService.getStudentById(id);
        if (existingStudent == null) {
            return ResponseEntity.notFound().build();
        }
        student.setStudentId(id);
        return ResponseEntity.ok(studentService.saveStudent(student));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable("id") Long id) {
        if (studentService.getStudentById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
}
