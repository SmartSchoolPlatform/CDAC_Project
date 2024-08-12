package com.demo.controller;

import com.demo.beans.FinalRecords;
import com.demo.service.FinalRecordsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/final-records")
public class FinalRecordsController {

    @Autowired
    private FinalRecordsService finalRecordsService;

    @GetMapping
    public List<FinalRecords> getAllFinalRecords() {
        return finalRecordsService.getAllFinalRecords();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FinalRecords> getFinalRecordById(@PathVariable("id") Long id) {
        FinalRecords finalRecord = finalRecordsService.getFinalRecordById(id);
        if (finalRecord == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(finalRecord);
    }

    @PostMapping
    public FinalRecords createFinalRecord(@RequestBody FinalRecords finalRecord) {
        return finalRecordsService.saveFinalRecord(finalRecord);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FinalRecords> updateFinalRecord(@PathVariable("id") Long id, @RequestBody FinalRecords finalRecord) {
        FinalRecords existingFinalRecord = finalRecordsService.getFinalRecordById(id);
        if (existingFinalRecord == null) {
            return ResponseEntity.notFound().build();
        }
        finalRecord.setFinalRecordId(id);
        return ResponseEntity.ok(finalRecordsService.saveFinalRecord(finalRecord));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFinalRecord(@PathVariable("id") Long id) {
        if (finalRecordsService.getFinalRecordById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        finalRecordsService.deleteFinalRecord(id);
        return ResponseEntity.noContent().build();
    }
}
