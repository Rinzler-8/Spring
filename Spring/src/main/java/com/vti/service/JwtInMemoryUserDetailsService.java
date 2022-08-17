package com.vti.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vti.entity.Account;
import com.vti.form.AccountFormForRegister;
import com.vti.repository.IAccountRepository2;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	@Autowired
	private IAccountRepository2 accountDAO;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = accountDAO.findByUsername(username);
		if (account == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		} else {
			return new User(account.getUsername(), account.getPassword(), new ArrayList<>());
		}

//		if ("javainuse".equals(username)) {
//			return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
//					new ArrayList<>());
//		} else {
//			throw new UsernameNotFoundException("User not found with username: " + username);
//		}

	}

	public Account save(AccountFormForRegister accountFormRegister) {
		Account newAccount = new Account();
		newAccount.setEmail(accountFormRegister.getEmail());
		newAccount.setUsername(accountFormRegister.getUsername());
		newAccount.setFullname(accountFormRegister.getFullname());
		newAccount.setAvatarImageName(accountFormRegister.getAvatarImageName());
		newAccount.setMobile(accountFormRegister.getMobile());
		newAccount.setAddress(accountFormRegister.getAddress());
		// Ma hoa password
		String passEncode = bcryptEncoder.encode(accountFormRegister.getPassword());

		// Luu thong tin password
		newAccount.setPassword(passEncode);
		return accountDAO.save(newAccount);
	}

//	public Account2 save(AccountDto2 account) {
//		Account2 newAccount = new Account2();
//		newAccount.setUsername(account.getUsername());
//		newAccount.setPassword(bcryptEncoder.encode(account.getPassword()));
//		return accountDAO.save(newAccount);
//	}
}
