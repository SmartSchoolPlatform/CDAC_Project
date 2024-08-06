package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Classes;

@Repository
public interface ClassesDao extends JpaRepository<Classes, Long> {

	@Query(value="SELECT * FROM classes WHERE class_name = :className", nativeQuery = true)
	Classes findByName(@Param("className") String className);
	
	@Query(value="SELECT * FROM classes WHERE staff_id=:staffid",nativeQuery=true)
	List<Classes> findClassesByStaff(@Param("staffid") String staffid);


}
