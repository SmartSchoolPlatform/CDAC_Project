package com.demo.service;

import com.demo.beans.Parent;
import java.util.List;

public interface ParentService {
    List<Parent> getAllParents();
    Parent getParentById(Long parentId);
    Parent saveParent(Parent parent);
    void deleteParent(Long parentId);
	List<Long> getClassIdsByParentId(Long parentId);
}
