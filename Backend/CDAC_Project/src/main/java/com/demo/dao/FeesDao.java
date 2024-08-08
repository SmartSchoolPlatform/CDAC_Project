package com.demo.dao;

import com.demo.beans.Fees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeesDao extends JpaRepository<Fees, Long> {
    // You can define additional query methods here if needed
}
