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

import com.demo.beans.Attendance;
import com.demo.beans.request.AttendanceDTO;
import com.demo.service.AttendanceService;
import com.demo.service.ClassesService;
import com.demo.service.StudentService;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;
    
    @Autowired
    private ClassesService classesService;
    
    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<Attendance> getAllAttendance() {
        return attendanceService.getAllAttendance();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Attendance> getAttendanceById(@PathVariable("id") Long id) {
        Attendance attendance = attendanceService.getAttendanceById(id);
        if (attendance == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(attendance);
    }
    
    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<Attendance>> getAttendanceByStudentId(@PathVariable Long studentId) {
        List<Attendance> attendanceList = attendanceService.getAttendanceByStudentId(studentId);
        return ResponseEntity.ok(attendanceList);
    }


    @PostMapping
    public ResponseEntity<Attendance> createOrUpdateAttendance(@RequestBody AttendanceDTO attendanceDTO) {
        Attendance attendance = new Attendance();
        
        attendance.setClasses(classesService.getById(attendanceDTO.getClassId()));
        attendance.setStudent(studentService.getStudentById(attendanceDTO.getStudentId()));
        attendance.setCount(attendanceDTO.getCount());

        Attendance savedAttendance = attendanceService.saveOrUpdateAttendance(attendance);
        return ResponseEntity.ok(savedAttendance);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Attendance> updateAttendance(@PathVariable("id") Long id, @RequestBody Attendance attendance) {
        Attendance existingAttendance = attendanceService.getAttendanceById(id);
        if (existingAttendance == null) {
            return ResponseEntity.notFound().build();
        }
        attendance.setAttendanceId(id);
        return ResponseEntity.ok(attendanceService.saveAttendance(attendance));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAttendance(@PathVariable("id") Long id) {
        if (attendanceService.getAttendanceById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        attendanceService.deleteAttendance(id);
        return ResponseEntity.noContent().build();
    }
}
