package com.demo.controller;

import com.demo.beans.Notices;
import com.demo.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Notices")
public class NoticeController {

    @Autowired
    private NoticeService Noticeservice;

    @GetMapping
    public List<Notices> getAllNotices() {
        return Noticeservice.getAllNotices();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notices> getNoticesById(@PathVariable("id") Long id) {
        Notices Notices = Noticeservice.getNoticeById(id);
        if (Notices == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(Notices);
    }

    @PostMapping
    public Notices createNotices(@RequestBody Notices Notices) {
        return Noticeservice.saveNotice(Notices);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Notices> updateNotices(@PathVariable("id") Long id, @RequestBody Notices Notices) {
        Notices existingNotices = Noticeservice.getNoticeById(id);
        if (existingNotices == null) {
            return ResponseEntity.notFound().build();
        }
        Notices.setNoticeId(id);
        return ResponseEntity.ok(Noticeservice.saveNotice(Notices));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNotices(@PathVariable("id") Long id) {
        if (Noticeservice.getNoticeById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        Noticeservice.deleteNotice(id);
        return ResponseEntity.noContent().build();
    }
}
