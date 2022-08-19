package com.vti.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.vti.entity.Account;
import com.vti.form.AccountFormForCreating;
import com.vti.form.AccountFormForRegister;
import com.vti.form.AccountFormForUpdating;
import com.vti.repository.IAccountRepository;
import com.vti.specification.AccountSpecification;

@Service
public class AccountService implements IAccountService {
	@Autowired
	private IAccountRepository accountRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

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
	public Account getAccountByID(short id) {
		return accountRepository.getById(id);
	}

	@Override
	public void createNewAccount(AccountFormForCreating accountNewForm) {
//		Tạo account cần thêm mới từ thông tin nhận được accountNewForm
		Account account = new Account();
		account.setEmail(accountNewForm.getEmail());
		account.setUsername(accountNewForm.getUsername());
		account.setFullname(accountNewForm.getFullname());
		account.setAvatarImageName(accountNewForm.getAvatarImageName());
		account.setMobile(accountNewForm.getMobile());
		account.setAddress(accountNewForm.getAddress());
//		account.setPassword(accountNewForm.getPassword());

		accountRepository.save(account);

	}

	@Override
	public void updateAccount(short id, AccountFormForUpdating accountUpdateForm) {
//	Tìm Account cần update trên DB
		Account account = accountRepository.getById(id);
//	Thực hiện Update thông tin
		account.setFullname(accountUpdateForm.getFullname());
		account.setAvatarImageName(accountUpdateForm.getAvatarImageName());
		account.setMobile(accountUpdateForm.getMobile());
		account.setAddress(accountUpdateForm.getAddress());
//  Lưu lại Account xuống DB
		accountRepository.save(account);

	}

	@Override
	public void deleteAccount(short id) {
		accountRepository.deleteById(id);
	}

	@Override
	public Account findByUsername(String username) {
		// TODO Auto-generated method stub
		return accountRepository.findByUsername(username);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = accountRepository.findByUsername(username);
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
		String passEncode = passwordEncoder.encode(accountFormRegister.getPassword());

		// Luu thong tin password
		newAccount.setPassword(passEncode);
		return accountRepository.save(newAccount);
	}

}
