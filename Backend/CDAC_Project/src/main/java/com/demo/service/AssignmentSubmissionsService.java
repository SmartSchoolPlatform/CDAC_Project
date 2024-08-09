package com.demo.service;

import com.demo.beans.AssignmentSubmissions;
import java.util.List;

public interface AssignmentSubmissionsService {
    List<AssignmentSubmissions> getAllAssignmentSubmissions();
    AssignmentSubmissions getAssignmentSubmissionById(Long assignmentSubmissionId);
    AssignmentSubmissions saveAssignmentSubmission(AssignmentSubmissions assignmentSubmission);
    void deleteAssignmentSubmission(Long assignmentSubmissionId);
}
