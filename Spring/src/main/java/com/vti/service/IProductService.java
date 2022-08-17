package com.vti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.vti.entity.Product;
import com.vti.form.ProductFormForCreating;
import com.vti.form.ProductFormForUpdating;

public interface IProductService {
	public Page<Product> getAllProducts(Pageable pageable, String search);

	public Product getProductById(short id);

	public Product createProduct(ProductFormForCreating productNewForm);

	public Product updateProduct(short id, ProductFormForUpdating productUpdateForm);

	public void deleteProductById(short id);
}
