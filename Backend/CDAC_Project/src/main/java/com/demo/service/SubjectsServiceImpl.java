package com.demo.service;

import com.demo.beans.Subjects;
import com.demo.dao.SubjectsDao;
import com.demo.service.SubjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectsServiceImpl implements SubjectsService {

    @Autowired
    private SubjectsDao subjectDao;

    @Override
    public List<Subjects> getAllSubjects() {
        return subjectDao.findAll();
    }

    @Override
    public Subjects getSubjectById(Long subjectId) {
        return subjectDao.findById(subjectId).orElse(null);
    }

    @Override
    public Subjects saveSubject(Subjects subject) {
        return subjectDao.save(subject);
    }

    @Override
    public void deleteSubject(Long subjectId) {
        subjectDao.deleteById(subjectId);
    }

	@Override
	public List<Subjects> getSubjectsByStaffId(String staffid) {
		return subjectDao.getSubjectByStaffId(staffid);
	}

	@Override
	public List<Subjects> getSubjectsByClassId(Long classId) {
		
		return subjectDao.findByClassId(classId);
	}
}
