package com.demo.service;

import com.demo.beans.Fees;
import com.demo.dao.FeesDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeesServiceImpl implements FeesService {

    @Autowired
    private FeesDao feesDao;

    @Override
    public List<Fees> getAllFees() {
        return feesDao.findAll();
    }

    @Override
    public Fees getFeeById(Long feesId) {
        return feesDao.findById(feesId).orElse(null);
    }

    @Override
    public Fees saveFee(Fees fee) {
        return feesDao.save(fee);
    }

    @Override
    public void deleteFee(Long feesId) {
        feesDao.deleteById(feesId);
    }
}
