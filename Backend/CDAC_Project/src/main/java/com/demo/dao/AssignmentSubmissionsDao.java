package com.demo.dao;

import com.demo.beans.AssignmentSubmissions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignmentSubmissionsDao extends JpaRepository<AssignmentSubmissions, Long> {
    // You can define additional query methods here if needed
}
