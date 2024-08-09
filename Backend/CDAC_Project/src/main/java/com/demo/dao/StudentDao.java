package com.demo.dao;

import com.demo.beans.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDao extends JpaRepository<Student, Long> {
    // You can define additional query methods here if needed
}
