package com.demo.controller;

import com.demo.beans.Exams;
import com.demo.service.ExamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exams")
public class ExamsController {

    @Autowired
    private ExamsService examsService;

    @GetMapping
    public List<Exams> getAllExams() {
        return examsService.getAllExams();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Exams> getExamById(@PathVariable("id") Long id) {
        Exams exam = examsService.getExamById(id);
        if (exam == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(exam);
    }

    @PostMapping
    public Exams createExam(@RequestBody Exams exam) {
        return examsService.saveExam(exam);
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExam(@PathVariable("id") Long id) {
        if (examsService.getExamById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        examsService.deleteExam(id);
        return ResponseEntity.noContent().build();
    }
}
