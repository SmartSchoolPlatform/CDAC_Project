package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Classes;
import com.demo.beans.Communication;
import com.demo.dao.CommunicationDao;

@Service
public class CommunicationServiceImpl implements CommunicationService {

    @Autowired
    private CommunicationDao communicationDao;

    @Override
    public List<Communication> getAllCommunications() {
        return communicationDao.findAll();
    }

    @Override
    public Communication getCommunicationById(Long messageId) {
        return communicationDao.findById(messageId).orElse(null);
    }

    @Override
    public Communication saveCommunication(Communication communication) {
        return communicationDao.save(communication);
    }

    @Override
    public void deleteCommunication(Long messageId) {
        communicationDao.deleteById(messageId);
    }



    @Override
    public List<Communication> getMessagesByClassId(Long classId) {
        return communicationDao.findByClassId(classId);
    }
    
    @Override
    public List<Communication> getMessagesByReceiverId(Long receiverId) {
        return communicationDao.findByReceiverId(receiverId);
    }

    @Override
    public List<Communication> getMessagesBySenderId(Long senderId) {
        return communicationDao.findBySenderId(senderId);
    }

    @Override
    public Communication updateCommunication(Long messageId, Communication updatedCommunication) {
        if (communicationDao.existsById(messageId)) {
            updatedCommunication.setMessageId(messageId);
            return communicationDao.save(updatedCommunication);
        }
        return null;
    }
    

}
