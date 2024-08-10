package com.demo.service;

import com.demo.beans.Attendance;
import java.util.List;

public interface AttendanceService {
    List<Attendance> getAllAttendance();
    Attendance getAttendanceById(Long attendanceId);
    Attendance saveAttendance(Attendance attendance);
    void deleteAttendance(Long attendanceId);
    Attendance saveOrUpdateAttendance(Attendance attendance);
    List<Attendance> getAttendanceByStudentId(Long studentId);
    
}
