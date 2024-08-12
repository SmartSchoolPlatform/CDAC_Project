package com.demo.controller;

import com.demo.beans.StudentClasses;
import com.demo.service.StudentClassesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student-classes")
public class StudentClassesController {

    @Autowired
    private StudentClassesService studentClassesService;

    @GetMapping
    public List<StudentClasses> getAllStudentClasses() {
        return studentClassesService.getAllStudentClasses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentClasses> getStudentClassById(@PathVariable("id") Long id) {
        StudentClasses studentClass = studentClassesService.getStudentClassById(id);
        if (studentClass == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(studentClass);
    }

    @PostMapping
    public StudentClasses createStudentClass(@RequestBody StudentClasses studentClass) {
        return studentClassesService.saveStudentClass(studentClass);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StudentClasses> updateStudentClass(@PathVariable("id") Long id, @RequestBody StudentClasses studentClass) {
        StudentClasses existingStudentClass = studentClassesService.getStudentClassById(id);
        if (existingStudentClass == null) {
            return ResponseEntity.notFound().build();
        }
        studentClass.setStudentClassId(id);
        return ResponseEntity.ok(studentClassesService.saveStudentClass(studentClass));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudentClass(@PathVariable("id") Long id) {
        if (studentClassesService.getStudentClassById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        studentClassesService.deleteStudentClass(id);
        return ResponseEntity.noContent().build();
    }
}
