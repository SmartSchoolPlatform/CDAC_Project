package com.demo.dao;

import com.demo.beans.StudentClasses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentClassesDao extends JpaRepository<StudentClasses, Long> {
}
