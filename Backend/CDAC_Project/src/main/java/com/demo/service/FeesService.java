package com.demo.service;

import com.demo.beans.Fees;
import java.util.List;

public interface FeesService {
    List<Fees> getAllFees();
    Fees getFeeById(Long feesId);
    Fees saveFee(Fees fee);
    void deleteFee(Long feesId);
}
