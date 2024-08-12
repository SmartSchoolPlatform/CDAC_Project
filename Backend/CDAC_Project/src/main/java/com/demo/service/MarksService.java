package com.demo.service;

import com.demo.beans.Marks;
import java.util.List;

public interface MarksService {
    List<Marks> getAllMarks();
    Marks getMarkById(Long markId);
    Marks saveMark(Marks mark);
    void deleteMark(Long markId);
}
