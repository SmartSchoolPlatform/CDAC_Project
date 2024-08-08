package com.demo.controller;

import com.demo.beans.Attendance;
import com.demo.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

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

    @PostMapping
    public Attendance createAttendance(@RequestBody Attendance attendance) {
        return attendanceService.saveAttendance(attendance);
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
