package com.demo.dao;

import com.demo.beans.FinalRecords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinalRecordsDao extends JpaRepository<FinalRecords, Long> {
    // You can define additional query methods here if needed
}
