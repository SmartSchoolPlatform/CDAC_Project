package com.demo.dao;

import com.demo.beans.Marks;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarksDao extends JpaRepository<Marks, Long> {

	Optional<Marks> findByExamNameAndStudentId(String examName, Long studentId);
    // You can define additional query methods here if needed
}
