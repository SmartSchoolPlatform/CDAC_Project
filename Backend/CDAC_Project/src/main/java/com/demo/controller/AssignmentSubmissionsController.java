package com.demo.controller;

import com.demo.beans.AssignmentSubmissions;
import com.demo.service.AssignmentSubmissionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assignment-submissions")
public class AssignmentSubmissionsController {

    @Autowired
    private AssignmentSubmissionsService assignmentSubmissionsService;

    @GetMapping
    public List<AssignmentSubmissions> getAllAssignmentSubmissions() {
        return assignmentSubmissionsService.getAllAssignmentSubmissions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AssignmentSubmissions> getAssignmentSubmissionById(@PathVariable("id") Long id) {
        AssignmentSubmissions assignmentSubmission = assignmentSubmissionsService.getAssignmentSubmissionById(id);
        if (assignmentSubmission == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(assignmentSubmission);
    }

    @PostMapping
    public AssignmentSubmissions createAssignmentSubmission(@RequestBody AssignmentSubmissions assignmentSubmission) {
        return assignmentSubmissionsService.saveAssignmentSubmission(assignmentSubmission);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AssignmentSubmissions> updateAssignmentSubmission(@PathVariable("id") Long id, 
            @RequestBody AssignmentSubmissions assignmentSubmission) {
        AssignmentSubmissions existingAssignmentSubmission = assignmentSubmissionsService.getAssignmentSubmissionById(id);
        if (existingAssignmentSubmission == null) {
            return ResponseEntity.notFound().build();
        }
        assignmentSubmission.setAssignmentSubmissionId(id);
        return ResponseEntity.ok(assignmentSubmissionsService.saveAssignmentSubmission(assignmentSubmission));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssignmentSubmission(@PathVariable("id") Long id) {
        if (assignmentSubmissionsService.getAssignmentSubmissionById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        assignmentSubmissionsService.deleteAssignmentSubmission(id);
        return ResponseEntity.noContent().build();
    }
}
