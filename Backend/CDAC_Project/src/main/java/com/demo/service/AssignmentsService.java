package com.demo.service;

import com.demo.beans.Assignments;
import java.util.List;

public interface AssignmentsService {
    List<Assignments> getAllAssignments();
    Assignments getAssignmentById(Long assignmentId);
    Assignments saveAssignment(Assignments assignment);
    void deleteAssignment(Long assignmentId);
}
