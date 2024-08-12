package com.demo.dao;

import com.demo.beans.Communication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommunicationDao extends JpaRepository<Communication, Long> {

    @Query(value = "SELECT * FROM communication WHERE receiver_id = :receiverId", nativeQuery = true)
    List<Communication> findByReceiverId(@Param("receiverId") Long receiverId);

    @Query(value = "SELECT * FROM communication WHERE sender_id = :senderId", nativeQuery = true)
    List<Communication> findBySenderId(@Param("senderId") Long senderId);

    @Query(value = "SELECT * FROM communication WHERE class_id = :classId order by message_id desc", nativeQuery = true)
    List<Communication> findByClassId(@Param("classId") Long classId);
}
