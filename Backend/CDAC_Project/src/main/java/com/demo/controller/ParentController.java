package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Parent;
import com.demo.beans.request.ParentDTO;
import com.demo.service.ParentService;
import com.demo.service.StudentService;
import com.demo.service.UserService;

@RestController
@RequestMapping("/parents")
public class ParentController {

    @Autowired
    private ParentService parentService;
    
    @Autowired
    private StudentService studentService;
    
    @Autowired
    private UserService userService;

    @GetMapping
    public List<Parent> getAllParents() {
        return parentService.getAllParents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Parent> getParentById(@PathVariable("id") Long id) {
        Parent parent = parentService.getParentById(id);
        if (parent == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(parent);
    }
    
    @GetMapping("/{parentId}/class-ids")
    public ResponseEntity<List<Long>> getClassIdsByParentId(@PathVariable("parentId") Long parentId) {
        List<Long> classIds = parentService.getClassIdsByParentId(parentId);
        if (classIds.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(classIds);
    }
    

    @PostMapping
    public Parent createParent(@RequestBody ParentDTO parentDTO) {
    	Parent parent =new Parent();
    	System.out.println("\n\n\n"+parentDTO+"\n\n\n");
    	parent.setAddress(parentDTO.getAddress());
    	parent.setEmail(parentDTO.getEmail());
    	parent.setName(parentDTO.getName());
    	parent.setParentId(parentDTO.getUserId());
    	parent.setPhoneNumber(parentDTO.getPhoneNumber());
    	parent.setSuggestions(null);
    	parent.setStudent(studentService.getStudentById( parentDTO.getStudentId()));
    	//parent.setUser(userService.getById( parentDTO.getUserId()));
        return parentService.saveParent(parent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Parent> updateParent(@PathVariable("id") Long id, @RequestBody Parent parent) {
        Parent existingParent = parentService.getParentById(id);
        if (existingParent == null) {
            return ResponseEntity.notFound().build();
        }
        parent.setParentId(id);
        return ResponseEntity.ok(parentService.saveParent(parent));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteParent(@PathVariable("id") Long id) {
        if (parentService.getParentById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        parentService.deleteParent(id);
        return ResponseEntity.noContent().build();
    }
}
