package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Staff;
import com.demo.dao.StaffDao;

@Service
public class StaffServiceImpl implements StaffService {
    @Autowired
    private StaffDao staffDao;

    @Override
    public List<Staff> getAllStaff() {
        return staffDao.findAll();
    }

    @Override
    public Staff getById(long id) {
        Optional<Staff> staff = staffDao.findById(id);
        return staff.orElse(null);
    }

    @Override
    public Staff addStaff(Staff staff) {
        Staff savedStaff = staffDao.save(staff);
        return staffDao.save(staff);
    }

    @Override
    public int modifyStaff(Staff staff) {
        Optional<Staff> existingStaff = staffDao.findById(staff.getStaffId());
        if (existingStaff.isPresent()) {
            Staff updatedStaff = existingStaff.get();
            updatedStaff.setName(staff.getName());
            updatedStaff.setDateOfBirth(staff.getDateOfBirth());
            updatedStaff.setDepartment(staff.getDepartment());
            updatedStaff.setDesignation(staff.getDesignation());
            updatedStaff.setEducationDetails(staff.getEducationDetails());
            updatedStaff.setEmail(staff.getEmail());
            updatedStaff.setGender(staff.getGender());
            updatedStaff.setPhoneNumber(staff.getPhoneNumber());
            updatedStaff.setProfilePic(staff.getProfilePic());
            staffDao.save(updatedStaff);
            return 1;
        }
        return 0;
    }

    @Override
    public void deleteById(long id) {
        staffDao.deleteById(id);
    }
}
