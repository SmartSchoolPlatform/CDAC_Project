package com.demo.controller;

import com.demo.beans.Fees;
import com.demo.service.FeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fees")
public class FeesController {

    @Autowired
    private FeesService feesService;

    @GetMapping
    public List<Fees> getAllFees() {
        return feesService.getAllFees();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Fees> getFeeById(@PathVariable("id") Long id) {
        Fees fee = feesService.getFeeById(id);
        if (fee == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(fee);
    }

    @PostMapping
    public Fees createFee(@RequestBody Fees fee) {
        return feesService.saveFee(fee);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Fees> updateFee(@PathVariable("id") Long id, @RequestBody Fees fee) {
        Fees existingFee = feesService.getFeeById(id);
        if (existingFee == null) {
            return ResponseEntity.notFound().build();
        }
        fee.setFeesId(id);
        return ResponseEntity.ok(feesService.saveFee(fee));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFee(@PathVariable("id") Long id) {
        if (feesService.getFeeById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        feesService.deleteFee(id);
        return ResponseEntity.noContent().build();
    }
}
