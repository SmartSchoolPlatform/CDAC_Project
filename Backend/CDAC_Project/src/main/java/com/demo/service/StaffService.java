package com.demo.service;

import java.util.List;
import com.demo.beans.Staff;

public interface StaffService {
    List<Staff> getAllStaff();

    Staff getById(long id);

    Staff addStaff(Staff staff);

    int modifyStaff(Staff staff);

    void deleteById(long id);
}
