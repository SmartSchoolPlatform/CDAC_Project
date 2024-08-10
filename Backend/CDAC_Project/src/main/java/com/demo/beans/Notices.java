package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Notices")
public class Notices {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long noticeId;

    private String noticeMessage;
    private String dateOfIssue;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private Staff staff;

    
	public Notices() {
		super();
	}


	public Notices(String noticeMessage, String dateOfIssue, Staff staff) {
		super();
		this.noticeMessage = noticeMessage;
		this.dateOfIssue = dateOfIssue;
		this.staff = staff;
	}


	public Notices(Long noticeId, String noticeMessage, String dateOfIssue, Staff staff) {
		super();
		this.noticeId = noticeId;
		this.noticeMessage = noticeMessage;
		this.dateOfIssue = dateOfIssue;
		this.staff = staff;
	}


	public Long getNoticeId() {
		return noticeId;
	}


	public void setNoticeId(Long noticeId) {
		this.noticeId = noticeId;
	}


	public String getNoticeMessage() {
		return noticeMessage;
	}


	public void setNoticeMessage(String noticeMessage) {
		this.noticeMessage = noticeMessage;
	}


	public String getDateOfIssue() {
		return dateOfIssue;
	}


	public void setDateOfIssue(String dateOfIssue) {
		this.dateOfIssue = dateOfIssue;
	}


	public Staff getStaff() {
		return staff;
	}


	public void setStaff(Staff staff) {
		this.staff = staff;
	}


	@Override
	public String toString() {
		return "Notices [noticeId=" + noticeId + ", noticeMessage=" + noticeMessage + ", dateOfIssue=" + dateOfIssue
				+ ", staff=" + staff + "]";
	}

	
    
}
