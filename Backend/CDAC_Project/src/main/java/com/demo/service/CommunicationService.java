package com.demo.service;

import com.demo.beans.Communication;
import java.util.List;

public interface CommunicationService {
    List<Communication> getAllCommunications();
    Communication getCommunicationById(Long messageId);
    Communication saveCommunication(Communication communication);
    void deleteCommunication(Long messageId);

    List<Communication> getMessagesByClassId(Long classId);
    Communication updateCommunication(Long messageId, Communication updatedCommunication);
    List<Communication> getMessagesByReceiverId(Long receiverId); // Add this method
    List<Communication> getMessagesBySenderId(Long senderId); // Add this method
}
