package com.demo.service;

import com.demo.beans.Assignments;
import com.demo.dao.AssignmentsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentsServiceImpl implements AssignmentsService {

    @Autowired
    private AssignmentsDao assignmentsDao;

    @Override
    public List<Assignments> getAllAssignments() {
        return assignmentsDao.findAll();
    }

    @Override
    public Assignments getAssignmentById(Long assignmentId) {
        return assignmentsDao.findById(assignmentId).orElse(null);
    }

    @Override
    public Assignments saveAssignment(Assignments assignment) {
        return assignmentsDao.save(assignment);
    }

    @Override
    public void deleteAssignment(Long assignmentId) {
        assignmentsDao.deleteById(assignmentId);
    }
}
