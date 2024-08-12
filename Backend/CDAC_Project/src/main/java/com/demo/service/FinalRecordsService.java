package com.demo.service;

import com.demo.beans.FinalRecords;
import java.util.List;

public interface FinalRecordsService {
    List<FinalRecords> getAllFinalRecords();
    FinalRecords getFinalRecordById(Long finalRecordId);
    FinalRecords saveFinalRecord(FinalRecords finalRecord);
    void deleteFinalRecord(Long finalRecordId);
}
