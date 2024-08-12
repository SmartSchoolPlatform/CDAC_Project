package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.FinalRecords;

@Repository
public interface FinalRecordsDao extends JpaRepository<FinalRecords, Long> {
    // You can define additional query methods here if needed
	@Query("SELECT fr FROM FinalRecords fr WHERE fr.student.studentId = :studentId")
	List<FinalRecords> findByStudentId(Long studentId);
}
