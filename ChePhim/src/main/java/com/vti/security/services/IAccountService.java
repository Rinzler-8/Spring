package com.vti.security.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.vti.entity.Account;

public interface IAccountService {
	public Page<Account> getAllAccounts(Pageable pageable, String search);

	public Account getAccountByID(short id);

	public Account findByUsername(String username);

	UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

}
