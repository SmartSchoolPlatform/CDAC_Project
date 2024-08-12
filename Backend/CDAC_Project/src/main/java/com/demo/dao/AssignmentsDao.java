package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.Assignments;

@Repository
public interface AssignmentsDao extends JpaRepository<Assignments, Long> {
    // You can define additional query methods here if needed
	List<Assignments> findBySubject_SubjectId(Long subjectId);
}
