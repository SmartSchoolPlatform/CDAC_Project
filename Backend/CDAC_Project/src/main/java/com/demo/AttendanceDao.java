package com.demo.dao;

import com.demo.beans.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceDao extends JpaRepository<Attendance, Long> {
    // You can define additional query methods here if needed
}
