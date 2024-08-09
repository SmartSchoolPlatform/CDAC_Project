package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Attendance;
import com.demo.beans.Classes;
import com.demo.dao.AttendanceDao;
import com.demo.dao.ClassesDao;

@Service
public class AttendanceServiceImpl implements AttendanceService {

    @Autowired
    private AttendanceDao attendanceDao;
    
    @Autowired
    private ClassesService classesService;
    


    @Override
    public List<Attendance> getAllAttendance() {
        return attendanceDao.findAll();
    }

    @Override
    public Attendance getAttendanceById(Long attendanceId) {
        return attendanceDao.findById(attendanceId).orElse(null);
    }

    @Override
    public Attendance saveAttendance(Attendance attendance) {
        return attendanceDao.save(attendance);
    }

    @Override
    public void deleteAttendance(Long attendanceId) {
        attendanceDao.deleteById(attendanceId);
    }
    
    @Override
    public Attendance saveOrUpdateAttendance(Attendance attendance) {
        // Use the updated repository method
        Attendance existingAttendance = attendanceDao.findByClassesClassIdAndStudentStudentId(
                attendance.getClasses().getClassId(),
                attendance.getStudent().getStudentId());

        if (existingAttendance != null) {
            // Update existing record
            existingAttendance.setCount(attendance.getCount());
            return attendanceDao.save(existingAttendance);
        } else {
            // Create new record
            return attendanceDao.save(attendance);
        }
    }
    
    @Override
    public List<Attendance> getAttendanceByStudentId(Long studentId) {
        return attendanceDao.findByStudent_StudentId(studentId);
    }
    

    
}
