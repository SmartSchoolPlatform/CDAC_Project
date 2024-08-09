package com.demo.dao;

import com.demo.beans.Assignments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssignmentsDao extends JpaRepository<Assignments, Long> {
    // You can define additional query methods here if needed
}
