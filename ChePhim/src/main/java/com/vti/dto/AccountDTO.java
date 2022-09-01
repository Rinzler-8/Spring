package com.vti.dto;

import java.util.List;

import com.vti.entity.Role;
import com.vti.entity.Status;

//chuyển đổi giữa dữ liệu lấy được từ DB đẩy lên Frontend.
public class AccountDTO {

	private Long id;
	private String email;
	private String username;
	private List<Role> role;
	private Status status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public List<Role> getRole() {
		return this.role;
	}

	public void setRole(List<Role> role) {
		this.role = role;
	}
}
