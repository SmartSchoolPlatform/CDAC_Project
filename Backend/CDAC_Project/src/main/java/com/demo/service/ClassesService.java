package com.demo.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.demo.beans.Classes;

public interface ClassesService {
    List<Classes> getAllClasses();

    Classes getById(long id);

    int addClass(Classes clazz);


    void deleteById(long id);

	Classes getByName(String id);
	
	List<Classes> findClassesByStaff(String staffid);
	void updateTotalClassesTakes(Integer totalClassesTakes, Long classId);
}
