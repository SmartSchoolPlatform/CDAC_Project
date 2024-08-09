package com.demo.beans;

import javax.persistence.*;

@Entity
@Table(name = "Complaints")
public class Complaints {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long complaintId;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;

    private String complaintMessage;

	public Complaints() {
		super();
	}

	public Complaints(Parent parent, String complaintMessage) {
		super();
		this.parent = parent;
		this.complaintMessage = complaintMessage;
	}

	public Complaints(Long complaintId, Parent parent, String complaintMessage) {
		super();
		this.complaintId = complaintId;
		this.parent = parent;
		this.complaintMessage = complaintMessage;
	}

	public Long getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(Long complaintId) {
		this.complaintId = complaintId;
	}

	public Parent getParent() {
		return parent;
	}

	public void setParent(Parent parent) {
		this.parent = parent;
	}

	public String getComplaintMessage() {
		return complaintMessage;
	}

	public void setComplaintMessage(String complaintMessage) {
		this.complaintMessage = complaintMessage;
	}

	@Override
	public String toString() {
		return "Complaints [complaintId=" + complaintId + ", parent=" + parent + ", complaintMessage="
				+ complaintMessage + "]";
	}

    
}
