package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Staff;
import com.demo.beans.Subjects;
import com.demo.beans.request.SubjectUpdateDTO;
import com.demo.service.StaffService;
import com.demo.service.SubjectsService;

@RestController
@RequestMapping("/subjects")
public class SubjectsController {

    @Autowired
    private SubjectsService subjectService;
    
    @Autowired
    private StaffService staffService;

    @GetMapping
    public List<Subjects> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subjects> getSubjectById(@PathVariable("id") Long id) {
        Subjects subject = subjectService.getSubjectById(id);
        if (subject == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(subject);
    }
    
    @GetMapping("/classes/{classId}")
    public ResponseEntity<List<Subjects>> getSubjectsByClassId(@PathVariable Long classId) {
        List<Subjects> subjects = subjectService.getSubjectsByClassId(classId);
        return ResponseEntity.ok(subjects);
    }
    
    @GetMapping("/classes/staff/{staffid}")
    public ResponseEntity<List<Subjects>> getSubjectByStaffId(@PathVariable("staffid") String staffid){
    	List<Subjects> subject=subjectService.getSubjectsByStaffId(staffid);
    	if (subject == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(subject);
    }
    

    @PostMapping
    public Subjects createSubject(@RequestBody Subjects subject) {
        return subjectService.saveSubject(subject);
    }

    @PutMapping("/update")
    public ResponseEntity<Subjects> updateSubject(@RequestBody SubjectUpdateDTO dto) {
        Subjects existingSubject = subjectService.getSubjectById(dto.getSubjectId());
        System.out.println(existingSubject);
        if (existingSubject == null) {
            return ResponseEntity.notFound().build();
        }

        if (dto.getStaffId() != null) {
            // Retrieve the staff entity by ID and set it to the subject
            Staff staff = staffService.getById(dto.getStaffId());
            if (staff != null) {
                existingSubject.setStaff(staff);
            }
        }
        System.out.println(existingSubject);
        //System.out.println(existingSubject);

        return ResponseEntity.ok(subjectService.saveSubject(existingSubject));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable("id") Long id) {
        if (subjectService.getSubjectById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        subjectService.deleteSubject(id);
        return ResponseEntity.noContent().build();
    }
}
