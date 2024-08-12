package com.demo.controller;

import com.demo.beans.Marks;
import com.demo.service.MarksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/marks")
public class MarksController {

    @Autowired
    private MarksService marksService;

    @GetMapping
    public List<Marks> getAllMarks() {
        return marksService.getAllMarks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Marks> getMarkById(@PathVariable("id") Long id) {
        Marks mark = marksService.getMarkById(id);
        if (mark == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mark);
    }

    @PostMapping
    public Marks createMark(@RequestBody Marks mark) {
        return marksService.saveMark(mark);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Marks> updateMark(@PathVariable("id") Long id, @RequestBody Marks mark) {
        Marks existingMark = marksService.getMarkById(id);
        if (existingMark == null) {
            return ResponseEntity.notFound().build();
        }
        mark.setMarkId(id);
        return ResponseEntity.ok(marksService.saveMark(mark));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMark(@PathVariable("id") Long id) {
        if (marksService.getMarkById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        marksService.deleteMark(id);
        return ResponseEntity.noContent().build();
    }
}
