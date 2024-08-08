package com.demo.dao;

import com.demo.beans.Notices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeDao extends JpaRepository<Notices, Long> {
    // You can define additional query methods here if needed
}
