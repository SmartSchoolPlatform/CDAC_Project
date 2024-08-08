package com.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.demo.beans.Staff;

@Repository
public interface StaffDao extends JpaRepository<Staff, Long> {

	List<Staff> findAll();
    // Additional custom queries can be added here if needed

	Optional<Staff> findById(long id);

	Staff save(Staff staff);
}
