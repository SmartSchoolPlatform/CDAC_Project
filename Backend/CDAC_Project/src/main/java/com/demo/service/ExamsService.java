package com.demo.service;

import com.demo.beans.Exams;
import java.util.List;

public interface ExamsService {
    List<Exams> getAllExams();
    Exams getExamById(Long examId);
    Exams saveExam(Exams exam);
    void deleteExam(Long examId);
}
