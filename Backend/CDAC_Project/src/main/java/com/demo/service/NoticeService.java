package com.demo.service;

import com.demo.beans.Notices;
import java.util.List;

public interface NoticeService {
    List<Notices> getAllNotices();
    Notices getNoticeById(Long noticeId);
    Notices saveNotice(Notices notice);
    void deleteNotice(Long noticeId);
}
