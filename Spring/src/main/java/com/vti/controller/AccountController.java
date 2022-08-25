package com.vti.controller;

import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vti.dto.AccountDto;
import com.vti.entity.Account;
import com.vti.form.AccountFormForCreating;
import com.vti.form.AccountFormForUpdating;
import com.vti.service.IAccountService;

@RestController
@RequestMapping(value = "api/v1/accounts")
@CrossOrigin("*")
public class AccountController {
	@Autowired
	private IAccountService accountService;

	@GetMapping()
//	public ResponseEntity<?> getAllAccounts() {
//		List<Account> accountListDB = accountService.getAllAccounts();
//		List<AccountDto> accountListDto = new ArrayList<>();
//
//		// convert accountListDB --> accountListDto
//		for (Account accountDB : accountListDB) {
//			AccountDto accountDto = new AccountDto();
//			accountDto.setId(accountDB.getId());
//			accountDto.setEmail(accountDB.getEmail());
//			accountDto.setUsername(accountDB.getUsername());
//			accountDto.setFullname(accountDB.getFullname());
//			accountDto.setAvatarImageName(accountDB.getAvatarImageName());
//			accountDto.setMobile(accountDB.getMobile());
//			accountDto.setAddress(accountDB.getAddress());
//			accountDto.setCreateDate(accountDB.getCreateDate());
//			accountDto.setStatus(accountDB.getStatus().toString());
//
//			accountListDto.add(accountDto);
//		}
//
//		return new ResponseEntity<>(accountListDto, HttpStatus.OK);
//	}

	public ResponseEntity<?> getAllaccount(Pageable pageable, @RequestParam(required = false) String search) {
		Page<Account> accountPage_DB = accountService.getAllAccounts(pageable, search);
		// Dữ liệu lấy ở DB, đã được thực hiện phân trang và sort dữ liệu

		// Chuyển đổi dữ liệu
		Page<AccountDto> accountPage_Dtos = accountPage_DB.map(new Function<Account, AccountDto>() {
			@Override
			public AccountDto apply(Account account) {
				AccountDto accountDto = new AccountDto();
				accountDto.setId(account.getId());
				accountDto.setEmail(account.getEmail());
				accountDto.setUsername(account.getUsername());
				accountDto.setFullname(account.getFullname());
				accountDto.setAvatarImageName(account.getAvatarImageName());
				accountDto.setMobile(account.getMobile());
				accountDto.setAddress(account.getAddress());
				accountDto.setCreateDate(account.getCreateDate());
				return accountDto;
			}

		});

		return new ResponseEntity<>(accountPage_Dtos, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getAccountByID(@PathVariable(name = "id") short id) {
		try {
			Account accountDB = accountService.getAccountByID(id);

			// convert accountDB --> accountDto

			AccountDto accountDto = new AccountDto();
			accountDto.setId(accountDB.getId());
			accountDto.setEmail(accountDB.getEmail());
			accountDto.setUsername(accountDB.getUsername());
			accountDto.setFullname(accountDB.getFullname());
			accountDto.setAvatarImageName(accountDB.getAvatarImageName());
			accountDto.setMobile(accountDB.getMobile());
			accountDto.setAddress(accountDB.getAddress());
			accountDto.setCreateDate(accountDB.getCreateDate());

			return new ResponseEntity<>(accountDto, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
		}

	}

	// @RequestMapping(method = RequestMethod.POST)
	@PostMapping()
	public ResponseEntity<?> createAccount(@RequestBody AccountFormForCreating accountFormCreate) {

		accountService.createNewAccount(accountFormCreate);

		return new ResponseEntity<>("Create new account ok", HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateAccount(@PathVariable(name = "id") short id,
			@RequestBody AccountFormForUpdating accountFormUpdate) {

		accountService.updateAccount(id, accountFormUpdate);

		return new ResponseEntity<>("Update account ok", HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteAccount(@PathVariable(name = "id") short idInput) {
		accountService.deleteAccount(idInput);
		return new ResponseEntity<>("Delete account ok", HttpStatus.OK);
	}

}
