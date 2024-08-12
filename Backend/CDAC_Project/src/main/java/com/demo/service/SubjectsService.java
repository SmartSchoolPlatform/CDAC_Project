package com.demo.service;

import com.demo.beans.Subjects;
import java.util.List;

public interface SubjectsService {
    List<Subjects> getAllSubjects();
    Subjects getSubjectById(Long subjectId);
    Subjects saveSubject(Subjects subject);
    void deleteSubject(Long subjectId);
    List<Subjects> getSubjectsByStaffId(String staffid);
	List<Subjects> getSubjectsByClassId(Long classId);
}
