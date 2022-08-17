package com.vti.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import com.vti.entity.Account2;

public interface IAccountRepository2 extends CrudRepository<Account2, Integer>, JpaSpecificationExecutor<Account2> {
//public interface IAccountRepository2 extends CrudRepository<Account, Integer>, JpaSpecificationExecutor<Account> {
	public Account2 findByUsername(String username);

}
