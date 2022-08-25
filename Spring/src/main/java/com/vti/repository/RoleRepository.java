package com.vti.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.vti.entity.ERole;
import com.vti.entity.Role;

public interface RoleRepository extends CrudRepository<Role, Integer> {
	Optional<Role> findByName(ERole name);
}
