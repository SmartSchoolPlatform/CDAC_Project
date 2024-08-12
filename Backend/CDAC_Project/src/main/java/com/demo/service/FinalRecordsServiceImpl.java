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

    public FinalRecords saveFinalRecord(FinalRecords finalRecords) {
        return finalRecordsDao.save(finalRecords);
    }

    public List<FinalRecords> getFinalRecordsByStudentId(Long studentId) {
        return finalRecordsDao.findByStudentId(studentId);
    }

    @Override
    public void deleteFinalRecord(Long finalRecordId) {
        finalRecordsDao.deleteById(finalRecordId);
    }
    
    public FinalRecords createOrUpdateFinalRecord(FinalRecords finalRecords) {
        if (finalRecords.getFinalRecordId() != null) {
            // Update existing record
            if (finalRecordsDao.existsById(finalRecords.getFinalRecordId())) {
                return finalRecordsDao.save(finalRecords);
            } else {
                // If record does not exist, create a new one
                return finalRecordsDao.save(finalRecords);
            }
        } else {
            // Create new record
            return finalRecordsDao.save(finalRecords);
        }
    }
}
