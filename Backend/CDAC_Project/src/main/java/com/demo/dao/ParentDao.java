package com.demo.dao;

import com.demo.beans.Parent;
import com.demo.beans.Subjects;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ParentDao extends JpaRepository<Parent, Long> {

    @Query("SELECT s.classes.classId FROM Parent p JOIN p.student s WHERE p.parentId = :parentId")
    List<Long> getClassIdsForParent(@Param("parentId") Long parentId);
}



