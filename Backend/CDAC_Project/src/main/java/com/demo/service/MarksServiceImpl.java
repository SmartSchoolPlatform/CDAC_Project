package com.demo.service;

import com.demo.beans.Marks;
import com.demo.dao.MarksDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarksServiceImpl implements MarksService {

    @Autowired
    private MarksDao marksDao;

    @Override
    public List<Marks> getAllMarks() {
        return marksDao.findAll();
    }

    @Override
    public Marks getMarkById(Long markId) {
        return marksDao.findById(markId).orElse(null);
    }

    @Override
    public Marks saveMark(Marks mark) {
        return marksDao.save(mark);
    }

    @Override
    public void deleteMark(Long markId) {
        marksDao.deleteById(markId);
    }
}
