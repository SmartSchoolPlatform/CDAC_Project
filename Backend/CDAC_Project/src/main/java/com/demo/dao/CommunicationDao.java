package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Communication;

@Repository
public interface CommunicationDao extends JpaRepository<Communication, Long> {
	@Query(value="select * from communication where parent_id=:parentid",nativeQuery=true)
	List<Communication> findByParentId(@Param("parentid") Long parentid);
}
