package com.demo.service;

import com.demo.beans.Notices;
import com.demo.dao.NoticeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeDao noticeDao;

    @Override
    public List<Notices> getAllNotices() {
        return noticeDao.findAllOrderedByIdDesc();
    }

    @Override
    public Notices getNoticeById(Long noticeId) {
        return noticeDao.findById(noticeId).orElse(null);
    }

    @Override
    public Notices saveNotice(Notices notice) {
        return noticeDao.save(notice);
    }

    @Override
    public void deleteNotice(Long noticeId) {
        noticeDao.deleteById(noticeId);
    }
}
