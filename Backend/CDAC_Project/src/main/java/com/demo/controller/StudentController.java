package com.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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
import com.demo.service.UserService;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;
    
    @Autowired
    private ClassesService classesService;
    
    @Autowired
    private UserService userService;

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
    
    
//    @PostMapping("/create")
//    public ResponseEntity<String> createStudent(@RequestBody StudentDTO studentDTO) {
//        studentService.createStudent(studentDTO);
//        return ResponseEntity.ok("Student created successfully");
//    }
    
    @PostMapping("/create")
    public ResponseEntity<Student> createStudent(@RequestBody StudentDTO studentDTO) {
        try {
            // Create a new Student object
            Student student = new Student();
            student.setName(studentDTO.getName());
            student.setDateOfBirth(studentDTO.getDateOfBirth());
            student.setAddress(studentDTO.getAddress());
            student.setPhoneNumber(studentDTO.getPhoneNumber());
            student.setEmail(studentDTO.getEmail());

            // Convert String to Gender Enum
            if (studentDTO.getGender() != null) {
                student.setGender(Student.Gender.valueOf(studentDTO.getGender()));
            }
            
            student.setProfilePic(studentDTO.getProfilePic());
            student.setAdmissionDate(studentDTO.getAdmissionDate());
            
            if (studentDTO.getClassId() != null) {
                Classes classes = classesService.getById(studentDTO.getClassId());
                if (classes != null) {
                    student.setClasses(classes);
                } else {
                    return ResponseEntity.badRequest().body(null);
                }
            }
            student.setStudentId(studentDTO.getUserId());
            
            // Save the Student entity initially (studentId will be auto-generated)
            Student savedStudent = studentService.saveStudent(student);

            // Use savedStudent.getStudentId() if needed, but do not set it directly

            // Return the saved student
            return ResponseEntity.ok(savedStudent);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }





    
    @PatchMapping("/{id}")
    public ResponseEntity<Student> updateStudentClass(@PathVariable Long id, @RequestBody Map<String, Long> updateData) {
        Student student = studentService.getStudentById(id);
        if (student == null) {
            return ResponseEntity.notFound().build();
        }
        Long newClassId = updateData.get("classId");
        Classes newClass = classesService.getById(newClassId);
        if (newClass == null) {
            return ResponseEntity.badRequest().build();
        }
        student.setClasses(newClass);
        Student updatedStudent = studentService.saveStudent(student);
        return ResponseEntity.ok(updatedStudent);
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
