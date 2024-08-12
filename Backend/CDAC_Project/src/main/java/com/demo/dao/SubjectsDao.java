package com.demo.dao;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Subjects;

@Repository
public interface SubjectsDao extends JpaRepository<Subjects, Long> {
	
	@Query(value="select * from subjects where staff_id=:staffid",nativeQuery=true)
	List<Subjects> getSubjectByStaffId(@Param("staffid") String staffid);

	@Query("SELECT s FROM Subjects s WHERE s.classes.id = :classId")
    List<Subjects> findByClassId(@Param("classId") Long classId);
}
