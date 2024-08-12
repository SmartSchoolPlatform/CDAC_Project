package com.demo.service;

import com.demo.beans.FinalRecords;
import java.util.List;

public interface FinalRecordsService {
    List<FinalRecords> getAllFinalRecords();
    FinalRecords saveFinalRecord(FinalRecords finalRecord);
    List<FinalRecords> getFinalRecordsByStudentId(Long studentId);
    void deleteFinalRecord(Long finalRecordId);
    FinalRecords createOrUpdateFinalRecord(FinalRecords finalRecords);
}
