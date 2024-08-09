package com.demo.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Communication")
public class Communication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private Classes classes;

    private String message;
    
    @Column(name = "sender_id")
    private Long senderId;

    @Column(name = "receiver_id")
    private Long receiverId;

    // Constructors
    public Communication() {
        super();
    }

    public Communication(Long messageId, Classes classes, String message, Long senderId, Long receiverId) {
        super();
        this.messageId = messageId;

        this.classes = classes;
        this.message = message;
        this.senderId = senderId;
        this.receiverId = receiverId;
    }

    // Getters and Setters
    public Long getMessageId() {
        return messageId;
    }

    public void setMessageId(Long messageId) {
        this.messageId = messageId;
    }



    public Classes getClasses() {
        return classes;
    }

    public void setClasses(Classes classes) {
        this.classes = classes;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getSenderId() {
        return senderId;
    }

    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }

    public Long getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(Long receiverId) {
        this.receiverId = receiverId;
    }

    @Override
    public String toString() {
        return "Communication [messageId=" + messageId +  ", classes=" + classes + ", message=" + message + ", senderId=" + senderId + ", receiverId=" + receiverId + "]";
    }
}
