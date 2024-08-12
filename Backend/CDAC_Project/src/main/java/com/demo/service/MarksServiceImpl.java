package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Marks;
import com.demo.beans.request.MarksDTO;
import com.demo.dao.MarksDao;

@Service
public class MarksServiceImpl implements MarksService {

    @Autowired
    private MarksDao marksDao;
    
    @Autowired
    private ClassesService classesService;
    
    @Autowired
    private StudentService studentService;
    
    @Autowired
    private SubjectsService subjectService;

    @Override
    public List<Marks> getAllMarks() {
        return marksDao.findAll();
    }

    @Override
    public Marks getMarkById(Long markId) {
        return marksDao.findById(markId).orElse(null);
    }

    @Override
    public Marks saveMark(Marks mark) {
        return marksDao.save(mark);
    }

    @Override
    public void deleteMark(Long markId) {
        marksDao.deleteById(markId);
    }
    
    @Override
    public Marks saveOrUpdateMarks(MarksDTO marksDTO) {
        Marks marks;
        // Check if the record exists by examining examName, studentId, classId, and subjectId
        Optional<Marks> existingMarks = marksDao.findByExamNameAndStudentIdAndClassIdAndSubjectId(
            marksDTO.getExamName(), 
            marksDTO.getStudentId(), 
            marksDTO.getClassId(), 
            marksDTO.getSubjectId()
        );

        if (existingMarks.isPresent()) {
            marks = existingMarks.get();
            // Update fields
            marks.setExamDate(marksDTO.getExamDate());
            marks.setMarks(marksDTO.getMarks());
            // Update other relationships if needed
        } else {
            marks = new Marks();
            marks.setExamDate(marksDTO.getExamDate());
            marks.setExamName(marksDTO.getExamName());
            marks.setMarks(marksDTO.getMarks());
            marks.setClasses(classesService.getById(marksDTO.getClassId()));
            marks.setStudent(studentService.getStudentById(marksDTO.getStudentId()));
            marks.setSubjects(subjectService.getSubjectById(marksDTO.getSubjectId()));
        }

        // Save to the database
        return marksDao.save(marks);
    }
    
    public List<Marks> getMarksByStudentId(Long studentId) {
        List<Marks> marks = marksDao.findByStudentId(studentId);
        System.out.println("data to send in service:\n" + marks);
        return marks;
    }
}
