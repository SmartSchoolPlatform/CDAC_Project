package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.demo.beans.Classes;
import com.demo.service.ClassesService;

@RestController
@RequestMapping("/classes")
public class ClassesController {

    @Autowired
    private ClassesService classesService;

    @GetMapping
    public ResponseEntity<List<Classes>> getAllClasses() {
        List<Classes> classesList = classesService.getAllClasses();
        return ResponseEntity.ok(classesList);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Classes> getClassById(@PathVariable int id) {
        Classes classes = classesService.getById(id);
        if (classes != null) {
            return ResponseEntity.ok(classes);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/name/{className}")
    public ResponseEntity<Classes> getClassByName(@PathVariable String className) {
        Classes classes = classesService.getByName(className);
        if (classes != null) {
            return ResponseEntity.ok(classes);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    
    // Get Class Teacher assign to which class by staffid
    @GetMapping("/{staffid}")
    public ResponseEntity<List<Classes>> getClassesByStaff(@PathVariable String staffid){
    	List<Classes> classes=classesService.findClassesByStaff(staffid);
    	if(classes !=null) {
    		return ResponseEntity.ok(classes);
    	} else {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    	}
    }
    

    @PostMapping
    public ResponseEntity<String> addClass(@RequestBody Classes classes) {
        int result = classesService.addClass(classes);
        if (result > 0) {
            return ResponseEntity.ok("Class added successfully");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteClass(@PathVariable int id) {
        classesService.deleteById(id);
        return ResponseEntity.ok("Class deleted successfully");
    }
}
