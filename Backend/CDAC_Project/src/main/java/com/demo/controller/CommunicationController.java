package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Classes;
import com.demo.beans.Communication;
import com.demo.beans.User;
import com.demo.beans.request.CommunicationRequestDto;
import com.demo.dao.CommunicationDao;
import com.demo.service.ClassesService;
import com.demo.service.CommunicationService;
import com.demo.service.ParentService;

@RestController
@RequestMapping("/communications")
public class CommunicationController {

    @Autowired
    private CommunicationService communicationService;

    @Autowired
    private CommunicationDao communicationDao;

    @Autowired
    private ParentService parentService;

    @Autowired
    private ClassesService classesService;
    
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
    public ResponseEntity<Communication> createCommunication(@RequestBody CommunicationRequestDto request) {
        try {
            System.out.println(request);

            Long receiverId = request.getReceiver_id();
            Long senderId = request.getSender_id();
            Long classId = request.getClassId();
            String message = request.getMessage();

            // Validate inputs
            if (senderId == null || classId == null || message == null) {
                return ResponseEntity.badRequest().body(null); // Respond with 400 if any field is null
            }

            // Fetch the class
            Classes classes = classesService.getById(classId);
            if (classes == null) {
                return ResponseEntity.badRequest().body(null); // Respond with 400 if class not found
            }

            // Create new Communication entity
            Communication communication = new Communication();
            communication.setReceiverId(receiverId);
            communication.setSenderId(senderId);
            communication.setClasses(classes);
            communication.setMessage(message);

            // Save Communication to the database
            Communication savedCommunication = communicationService.saveCommunication(communication);

            return ResponseEntity.ok(savedCommunication);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Respond with 500 if an error occurs
        }
    }

    
    @GetMapping("/sender/{senderId}")
    public List<Communication> getMessagesBySenderId(@PathVariable("senderId") Long senderId) {
        return communicationService.getMessagesBySenderId(senderId);
    }

    @GetMapping("/receiver/{receiverId}")
    public List<Communication> getMessagesByReceiverId(@PathVariable("receiverId") Long receiverId) {
        return communicationService.getMessagesByReceiverId(receiverId);
    }


   
    
    @GetMapping("/class/{classId}")
    public List<Communication> getMessagesByClassId(@PathVariable("classId") Long classId) {
        return communicationService.getMessagesByClassId(classId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Communication> updateCommunication(@PathVariable("id") Long id, @RequestBody Communication updatedCommunication) {
        Communication communication = communicationService.updateCommunication(id, updatedCommunication);
        if (communication == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(communication);
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
