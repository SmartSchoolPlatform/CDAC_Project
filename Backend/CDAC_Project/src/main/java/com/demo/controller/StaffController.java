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

import com.demo.beans.Staff;
import com.demo.beans.Student;
import com.demo.beans.request.StaffDTO;
import com.demo.beans.request.StudentDTO;
import com.demo.service.StaffService;

@RestController
@RequestMapping("/staff")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @GetMapping
    public ResponseEntity<List<Staff>> getAllStaff() {
        List<Staff> staffList = staffService.getAllStaff();
        return ResponseEntity.ok(staffList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Staff> getById(@PathVariable long id) {
        Staff staff = staffService.getById(id);
        if (staff != null) {
            return ResponseEntity.ok(staff);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Staff> createStaff(@RequestBody StaffDTO staffDTO) {
        Staff staff = new Staff();
        staff.setDesignation(staffDTO.getDesignation());
        staff.setName(staffDTO.getName());
        staff.setDepartment(staffDTO.getDepartment());
        staff.setPhoneNumber(staffDTO.getPhoneNumber());
        staff.setEmail(staffDTO.getEmail());
        staff.setDateOfBirth(staffDTO.getDateOfBirth());
        staff.setGender(staffDTO.getGender());
        staff.setEducationDetails(staffDTO.getEducationDetails());
        staff.setProfilePic(staffDTO.getProfilePic());
        staff.setStaffId(staffDTO.getStaffId());
        Staff savedStaff = staffService.addStaff(staff);
        return ResponseEntity.ok(savedStaff);
    }


    @PutMapping("/update/{staffId}")
    public ResponseEntity<Staff> updateStaff(@PathVariable Long staffId, @RequestBody StaffDTO staffDTO) {
        Staff staff = staffService.getById(staffId);
        if (staff == null) {
            return ResponseEntity.notFound().build();
        }
        staff.setName(staffDTO.getName());
        staff.setDateOfBirth(staffDTO.getDateOfBirth());
        staff.setDepartment(staffDTO.getDepartment());
        staff.setDesignation(staffDTO.getDesignation());
        staff.setEducationDetails(staffDTO.getEducationDetails());
        staff.setEmail(staffDTO.getEmail());
        staff.setGender(staffDTO.getGender());
        staff.setPhoneNumber(staffDTO.getPhoneNumber());
        staff.setProfilePic(staffDTO.getProfilePic());
        staff.setStaffId(staffDTO.getStaffId());
        
        Staff updatedStaff = staffService.addStaff(staff);
        return ResponseEntity.ok(updatedStaff);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStaff(@PathVariable long id) {
        staffService.deleteById(id);
        return ResponseEntity.ok("Staff deleted successfully");
    }
}
