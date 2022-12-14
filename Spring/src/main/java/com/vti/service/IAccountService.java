package com.vti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.vti.entity.Account;
import com.vti.form.AccountFormForCreating;
import com.vti.form.AccountFormForUpdating;

public interface IAccountService {
	public Page<Account> getAllAccounts(Pageable pageable, String search);

	public Account getAccountByID(short id);

	public void createNewAccount(AccountFormForCreating accountNewForm);

	public void updateAccount(short id, AccountFormForUpdating accountUpdateForm);

	public void deleteAccount(short id);

	public Account findByUsername(String username);

	UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

}
