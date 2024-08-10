package com.demo.service;

import com.demo.beans.AssignmentSubmissions;
import com.demo.dao.AssignmentSubmissionsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentSubmissionsServiceImpl implements AssignmentSubmissionsService {

    @Autowired
    private AssignmentSubmissionsDao assignmentSubmissionsDao;

    @Override
    public List<AssignmentSubmissions> getAllAssignmentSubmissions() {
        return assignmentSubmissionsDao.findAll();
    }

    @Override
    public AssignmentSubmissions getAssignmentSubmissionById(Long assignmentSubmissionId) {
        return assignmentSubmissionsDao.findById(assignmentSubmissionId).orElse(null);
    }

    @Override
    public AssignmentSubmissions saveAssignmentSubmission(AssignmentSubmissions assignmentSubmission) {
        return assignmentSubmissionsDao.save(assignmentSubmission);
    }

    @Override
    public void deleteAssignmentSubmission(Long assignmentSubmissionId) {
        assignmentSubmissionsDao.deleteById(assignmentSubmissionId);
    }
}
