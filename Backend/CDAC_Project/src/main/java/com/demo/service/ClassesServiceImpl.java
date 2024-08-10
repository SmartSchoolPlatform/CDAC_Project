package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Classes;
import com.demo.dao.ClassesDao;

@Service
public class ClassesServiceImpl implements ClassesService {
    @Autowired
    private ClassesDao classesDao;

    @Override
    public List<Classes> getAllClasses() {
        return classesDao.findAll();
    }

    @Override
    public Classes getById(long id) {
        Optional<Classes> clazz = classesDao.findById(id);
        return clazz.orElse(null);
    }
    
	@Override
	public Classes getByName(String id) {
		
		return classesDao.findByName(id);
	}
    

    @Override
    public int addClass(Classes clazz) {
        Classes savedClass = classesDao.save(clazz);
        return savedClass != null ? 1 : 0;
    }


    @Override
    public void deleteById(long id) {
        classesDao.deleteById(id);
    }

	@Override
	public List<Classes> findClassesByStaff(String staffid) {

		return classesDao.findClassesByStaff(staffid);
	}
	
    @Override
    public void updateTotalClassesTakes(Integer totalClassesTakes, Long classId) {


        Optional<Classes> classes = classesDao.findById(classId);

        if (classes != null) {
        	Classes classes1=classes.get();
            classes1.setTotalClassesTakes(totalClassesTakes);
            classesDao.save(classes1);
        } else {
            // Handle the case where the class is not found, if necessary
            // For example, you could log an error or throw a custom exception
            System.out.println("Class not found for ID: " + totalClassesTakes);
        }
    }


}
