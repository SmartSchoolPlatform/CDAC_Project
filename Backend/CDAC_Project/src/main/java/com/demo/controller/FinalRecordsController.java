package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.FinalRecords;
import com.demo.beans.request.FinalRecordsDTO;
import com.demo.service.ClassesService;
import com.demo.service.FinalRecordsService;
import com.demo.service.StudentService;

@RestController
@RequestMapping("/final-records")
public class FinalRecordsController {

    @Autowired
    private FinalRecordsService finalRecordsService;
    
    @Autowired
    private ClassesService classesService;
    
    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<FinalRecords> getAllFinalRecords() {
        return finalRecordsService.getAllFinalRecords();
    }
    
//    @GetMapping("/student")
//    public ResponseEntity<FinalRecords> getFinalRecordByStudentId(
//            @RequestParam("student_id") Long studentId) {
//        FinalRecords record = finalRecordsService.getFinalRecordByStudentId(studentId);
//        return record != null ? ResponseEntity.ok(record) : ResponseEntity.notFound().build();
//    }

    @GetMapping("/student/{id}")
    public ResponseEntity<List<FinalRecords>> getFinalRecordsByStudentId(@PathVariable("id") Long id) {
        List<FinalRecords> finalRecords = finalRecordsService.getFinalRecordsByStudentId(id);
        if (finalRecords.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(finalRecords);
    }


    @PostMapping
    public ResponseEntity<FinalRecords> createOrUpdateFinalRecord(@RequestBody FinalRecordsDTO finalRecordsDTO) {
    	System.out.println("\n\n"+finalRecordsDTO+"\n\n");
        FinalRecords finalRecords = new FinalRecords();
        // Map DTO to entity
        finalRecords.setGoodAt(finalRecordsDTO.getGoodAt());
        finalRecords.setWeakAt(finalRecordsDTO.getWeakAt());
        finalRecords.setSuggestions(finalRecordsDTO.getSuggestions());
        finalRecords.setClasses(classesService.getById( finalRecordsDTO.getClassId()));
        finalRecords.setStudent(studentService.getStudentById( finalRecordsDTO.getStudentId()));
        if (finalRecordsDTO.getFinalRecordId() != null) {
            // Existing record
            finalRecords.setFinalRecordId(finalRecordsDTO.getFinalRecordId());
        }
        FinalRecords updatedOrCreatedRecord = finalRecordsService.createOrUpdateFinalRecord(finalRecords);
        return ResponseEntity.status(HttpStatus.CREATED).body(updatedOrCreatedRecord);
    }


    @PostMapping("/final_records")
    public ResponseEntity<FinalRecords> createFinalRecord(@RequestBody FinalRecords finalRecords) {
        FinalRecords createdRecord = finalRecordsService.saveFinalRecord(finalRecords);
        return ResponseEntity.ok(createdRecord);
    }
}
