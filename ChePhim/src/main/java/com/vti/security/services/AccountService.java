package com.vti.security.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.vti.entity.Account;
import com.vti.repository.AccountRepository;
import com.vti.specification.AccountSpecification;

@Service
public class AccountService implements IAccountService {

	@Autowired
	AccountRepository accountRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = accountRepository.findByUsername(username);
		if (account == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		} else {
			return new User(account.getUsername(), account.getPassword(), new ArrayList<>());
		}
	}

	@Override
	public Page<Account> getAllAccounts(Pageable pageable, String search) {
		Specification<Account> whereAccount = null;
		if (!StringUtils.isEmpty(search)) {
			AccountSpecification usernameSpecification = new AccountSpecification("username", "LIKE", search);
			AccountSpecification fullnameSpecification = new AccountSpecification("fullname", "LIKE", search);
			AccountSpecification emailSpecification = new AccountSpecification("email", "LIKE", search);
			whereAccount = Specification.where(usernameSpecification).or(fullnameSpecification).or(emailSpecification);
		}

		return accountRepository.findAll(whereAccount, pageable); // findAll - phuong thuc co san cua JPA da duoc xay
																	// dung san khi extends ben repository
	}

	@Override
	public Account getAccountByID(Long id) {
		return accountRepository.getById(id);
	}

	@Override
	public Account findByUsername(String username) {
		// TODO Auto-generated method stub
		return accountRepository.findByUsername(username);
	}

	@Override
	public boolean existsUserByEmail(String email) {
		// TODO Auto-generated method stub
		return accountRepository.existsByEmail(email);
	}

	@Override
	public boolean existsUserByUsername(String username) {
		// TODO Auto-generated method stub
		return accountRepository.existsByUsername(username);
	}
}
