package com.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Marks;

@Repository
public interface MarksDao extends JpaRepository<Marks, Long> {

    @Query("SELECT m FROM Marks m WHERE m.examName = :examName AND m.student.studentId = :studentId")
    Optional<Marks> findByExamNameAndStudentId(@Param("examName") String examName, @Param("studentId") Long studentId);

    @Query("SELECT m FROM Marks m WHERE m.student.studentId = :studentId")
    List<Marks> findByStudentId(@Param("studentId") Long studentId);

    @Query("SELECT m FROM Marks m WHERE m.classes.classId = :classId")
    List<Marks> findByClassId(@Param("classId") Long classId);

    @Query("SELECT m FROM Marks m WHERE m.subjects.subjectId = :subjectId")
    List<Marks> findBySubjectId(@Param("subjectId") Long subjectId);
    
    @Query("SELECT m FROM Marks m WHERE m.examName = :examName " +
            "AND m.student.studentId = :studentId " +
            "AND m.classes.classId = :classId " +
            "AND m.subjects.subjectId = :subjectId")
     Optional<Marks> findByExamNameAndStudentIdAndClassIdAndSubjectId(
         @Param("examName") String examName,
         @Param("studentId") Long studentId,
         @Param("classId") Long classId,
         @Param("subjectId") Long subjectId
     );}
