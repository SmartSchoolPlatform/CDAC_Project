package com.demo.service;

import com.demo.beans.FinalRecords;
import com.demo.dao.FinalRecordsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FinalRecordsServiceImpl implements FinalRecordsService {

    @Autowired
    private FinalRecordsDao finalRecordsDao;

    @Override
    public List<FinalRecords> getAllFinalRecords() {
        return finalRecordsDao.findAll();
    }

    @Override
    public FinalRecords getFinalRecordById(Long finalRecordId) {
        return finalRecordsDao.findById(finalRecordId).orElse(null);
    }

    @Override
    public FinalRecords saveFinalRecord(FinalRecords finalRecord) {
        return finalRecordsDao.save(finalRecord);
    }

    @Override
    public void deleteFinalRecord(Long finalRecordId) {
        finalRecordsDao.deleteById(finalRecordId);
    }
}
