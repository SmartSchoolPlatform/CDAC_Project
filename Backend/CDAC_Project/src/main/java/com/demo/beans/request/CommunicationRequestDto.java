package com.demo.beans.request;

public class CommunicationRequestDto {

	private Long receiver_id;
    private Long sender_id;
    private Long classId;
    private String message;
    
    public CommunicationRequestDto() {
		super();
	}

	public CommunicationRequestDto(Long receiver_id, Long sender_id, Long classId, String message) {
		super();
		this.receiver_id = receiver_id;
		this.sender_id = sender_id;
		this.classId = classId;
		this.message = message;
	}

	public CommunicationRequestDto(Long sender_id, Long classId, String message) {
		super();
		this.sender_id = sender_id;
		this.classId = classId;
		this.message = message;
	}

	public Long getReceiver_id() {
        return receiver_id;
    }

    public void setReceiver_id(Long receiver_id) {
        this.receiver_id = receiver_id;
    }

    public Long getSender_id() {
        return sender_id;
    }

    public void setSender_id(Long sender_id) {
        this.sender_id = sender_id;
    }

    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
	@Override
	public String toString() {
		return "CommunicationRequestDto [receiver_id=" + receiver_id + ", sender_id=" + sender_id + ", classId="
				+ classId + ", message=" + message + "]";
	}

}