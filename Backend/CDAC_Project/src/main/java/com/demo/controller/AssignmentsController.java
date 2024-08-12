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

import com.demo.beans.Assignments;
import com.demo.beans.Subjects;
import com.demo.beans.request.AssignmentsDTO;
import com.demo.service.AssignmentsService;
import com.demo.service.SubjectsService;

@RestController
@RequestMapping("/assignments")
public class AssignmentsController {

    @Autowired
    private AssignmentsService assignmentsService;
    
    @Autowired
    private SubjectsService subjectsService;


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
    public ResponseEntity<Assignments> createAssignment(@RequestBody AssignmentsDTO assignmentDTO) {
        // Fetch the subject based on the provided subjectId
        Subjects subject = subjectsService.getSubjectById(assignmentDTO.getSubjectId());
        if (subject == null) {
            return ResponseEntity.badRequest().body(null);
        }

        // Create and save the assignment
        Assignments assignment = new Assignments();
        assignment.setAssignmentName(assignmentDTO.getAssignmentName());
        assignment.setAssignmentDate(assignmentDTO.getAssignmentDate());
        assignment.setSubject(subject);

        Assignments savedAssignment = assignmentsService.saveAssignment(assignment);
        return ResponseEntity.ok(savedAssignment);
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
    
    @GetMapping("/subject/{subjectId}")
    public ResponseEntity<List<Assignments>> getAssignmentsBySubjectId(@PathVariable Long subjectId) {
        List<Assignments> assignments = assignmentsService.getAssignmentsBySubjectId(subjectId);
        return ResponseEntity.ok(assignments);
    }
}
