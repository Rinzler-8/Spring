package com.vti.dto;

import java.util.List;

//chuyển đổi giữa dữ liệu lấy được từ DB đẩy lên Frontend.
public class AccountDTO {

	private Long id;
	private String email;
	private String username;
	private List<String> role;
	private String status;

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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<String> getRole() {
		return this.role;
	}

	public void setRole(List<String> role) {
		this.role = role;
	}
}
