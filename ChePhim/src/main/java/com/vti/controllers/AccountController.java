package com.vti.controllers;

import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vti.dto.AccountDTO;
import com.vti.entity.Account;
import com.vti.security.services.IAccountService;

@RestController
@RequestMapping(value = "api/v1/accounts")
@CrossOrigin("*")
public class AccountController {
	@Autowired
	private IAccountService accountService;

	@GetMapping(value = "/email/{email}")
	public ResponseEntity<?> existsUserByEmail(@PathVariable(name = "email") String email) {
		// get entity
		boolean result = accountService.existsUserByEmail(email);

		// return result
		return new ResponseEntity<>(result, HttpStatus.OK);
	}

	@GetMapping(value = "/username/{username}")
	public ResponseEntity<?> existsUserByUserName(@PathVariable(name = "username") String username) {
		// get entity
		boolean result = accountService.existsUserByUsername(username);

		// return result
		return new ResponseEntity<>(result, HttpStatus.OK);
	}

	@GetMapping()
	public ResponseEntity<?> getAllaccount(Pageable pageable, @RequestParam(required = false) String search) {
		Page<Account> accountPage_DB = accountService.getAllAccounts(pageable, search);
		// Dữ liệu lấy ở DB, đã được thực hiện phân trang và sort dữ liệu

		// Chuyển đổi dữ liệu
		Page<AccountDTO> accountPage_Dtos = accountPage_DB.map(new Function<Account, AccountDTO>() {
			@Override
			public AccountDTO apply(Account account) {
				AccountDTO AccountDTO = new AccountDTO();
				AccountDTO.setId(account.getId());
				AccountDTO.setEmail(account.getEmail());
				AccountDTO.setUsername(account.getUsername());
				AccountDTO.setRole(account.getRole());
				AccountDTO.setStatus(account.getStatus());
				return AccountDTO;
			}

		});

		return new ResponseEntity<>(accountPage_Dtos, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getAccountByID(@PathVariable(name = "id") Long id) {
		try {
			Account accountDB = accountService.getAccountByID(id);

			// convert accountDB --> AccountDTO

			AccountDTO AccountDTO = new AccountDTO();
			AccountDTO.setId(accountDB.getId());
			AccountDTO.setEmail(accountDB.getEmail());
			AccountDTO.setUsername(accountDB.getUsername());
			AccountDTO.setRole(accountDB.getRole());
			AccountDTO.setStatus(accountDB.getStatus());
			return new ResponseEntity<>(AccountDTO, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
		}

	}

}
