package com.demo.controller;

import com.demo.beans.Communication;
import com.demo.service.CommunicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/communications")
public class CommunicationController {

    @Autowired
    private CommunicationService communicationService;

    @GetMapping
    public List<Communication> getAllCommunications() {
        return communicationService.getAllCommunications();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Communication> getCommunicationById(@PathVariable("id") Long id) {
        Communication communication = communicationService.getCommunicationById(id);
        if (communication == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(communication);
    }

    @PostMapping
    public Communication createCommunication(@RequestBody Communication communication) {
        return communicationService.saveCommunication(communication);
    }


    @GetMapping("/parent/{parentId}")
    public List<Communication> getMessagesByParentId(@PathVariable("parentId") Long parentId) {
        return communicationService.getMessagesByParentId(parentId);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommunication(@PathVariable("id") Long id) {
        if (communicationService.getCommunicationById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        communicationService.deleteCommunication(id);
        return ResponseEntity.noContent().build();
    }
}
