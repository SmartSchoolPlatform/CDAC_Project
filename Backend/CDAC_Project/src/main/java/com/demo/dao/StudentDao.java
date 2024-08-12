package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Student;

@Repository
public interface StudentDao extends JpaRepository<Student, Long> {
    // You can define additional query methods here if needed
    @Query("SELECT s.classes.classId FROM Student s WHERE s.studentId IN :studentIds")
    List<Long> findClassIdsByStudentIds(@Param("studentIds") Long studentIds);
    
    @Query("SELECT s FROM Student s WHERE s.classes.classId = :classId")
    List<Student> findStudentsByClassId(@Param("classId") Long classId);
}
