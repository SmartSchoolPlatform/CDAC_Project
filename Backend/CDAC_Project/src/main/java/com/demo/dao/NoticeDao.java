package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.Notices;

@Repository
public interface NoticeDao extends JpaRepository<Notices, Long> {
    // You can define additional query methods here if needed
	
	@Query("SELECT e FROM Notices e ORDER BY e.id DESC")
    List<Notices> findAllOrderedByIdDesc();
}
