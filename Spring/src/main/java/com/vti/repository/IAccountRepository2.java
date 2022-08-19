package com.vti.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import com.vti.entity.Account;

public interface IAccountRepository2 extends CrudRepository<Account, Short>, JpaSpecificationExecutor<Account> {

	public Account findByUsername(String username);

}
