package com.demo.beans;
import javax.persistence.*;

@Entity
@Table(name = "Fees")
public class Fees {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feesId;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private Classes classes;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        PAID, UNPAID
    }

	public Fees() {
		super();
	}

	public Fees(Parent parent, Classes classes, Status status) {
		super();
		this.parent = parent;
		this.classes = classes;
		this.status = status;
	}

	public Fees(Long feesId, Parent parent, Classes classes, Status status) {
		super();
		this.feesId = feesId;
		this.parent = parent;
		this.classes = classes;
		this.status = status;
	}

	public Long getFeesId() {
		return feesId;
	}

	public void setFeesId(Long feesId) {
		this.feesId = feesId;
	}

	public Parent getParent() {
		return parent;
	}

	public void setParent(Parent parent) {
		this.parent = parent;
	}

	public Classes getClasses() {
		return classes;
	}

	public void setClasses(Classes classes) {
		this.classes = classes;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Fees [feesId=" + feesId + ", parent=" + parent + ", classes=" + classes + ", status=" + status + "]";
	}

    
}

