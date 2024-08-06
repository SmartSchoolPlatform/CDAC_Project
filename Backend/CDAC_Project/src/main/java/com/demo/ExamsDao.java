package com.demo.dao;

import com.demo.beans.Exams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamsDao extends JpaRepository<Exams, Long> {
    // You can define additional query methods here if needed
}
