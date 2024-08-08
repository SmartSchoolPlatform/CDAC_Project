package com.demo.controller;

import com.demo.beans.Assignments;
import com.demo.service.AssignmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignments")
public class AssignmentsController {

    @Autowired
    private AssignmentsService assignmentsService;

    @GetMapping
    public List<Assignments> getAllAssignments() {
        return assignmentsService.getAllAssignments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Assignments> getAssignmentById(@PathVariable("id") Long id) {
        Assignments assignment = assignmentsService.getAssignmentById(id);
        if (assignment == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(assignment);
    }

    @PostMapping
    public Assignments createAssignment(@RequestBody Assignments assignment) {
        return assignmentsService.saveAssignment(assignment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Assignments> updateAssignment(@PathVariable("id") Long id, 
            @RequestBody Assignments assignment) {
        Assignments existingAssignment = assignmentsService.getAssignmentById(id);
        if (existingAssignment == null) {
            return ResponseEntity.notFound().build();
        }
        assignment.setAssignmentId(id);
        return ResponseEntity.ok(assignmentsService.saveAssignment(assignment));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssignment(@PathVariable("id") Long id) {
        if (assignmentsService.getAssignmentById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        assignmentsService.deleteAssignment(id);
        return ResponseEntity.noContent().build();
    }
}
