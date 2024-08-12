package com.demo.service;

import com.demo.beans.Parent;
import com.demo.dao.ParentDao;
import com.demo.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParentServiceImpl implements ParentService {

    @Autowired
    private ParentDao parentDao;

    @Override
    public List<Parent> getAllParents() {
        return parentDao.findAll();
    }

    @Override
    public Parent getParentById(Long parentId) {
        return parentDao.findById(parentId).orElse(null);
    }

    @Override
    public Parent saveParent(Parent parent) {
        return parentDao.save(parent);
    }

    @Override
    public void deleteParent(Long parentId) {
        parentDao.deleteById(parentId);
    }

    @Override
    public List<Long> getClassIdsByParentId(Long parentId) {
        return parentDao.getClassIdsForParent(parentId);
    }
}


