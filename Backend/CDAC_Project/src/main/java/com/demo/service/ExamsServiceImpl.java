package com.demo.service;

import com.demo.beans.Exams;
import com.demo.dao.ExamsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamsServiceImpl implements ExamsService {

    @Autowired
    private ExamsDao examsDao;

    @Override
    public List<Exams> getAllExams() {
        return examsDao.findAll();
    }

    @Override
    public Exams getExamById(Long examId) {
        return examsDao.findById(examId).orElse(null);
    }

    @Override
    public Exams saveExam(Exams exam) {
        return examsDao.save(exam);
    }

    @Override
    public void deleteExam(Long examId) {
        examsDao.deleteById(examId);
    }
}
