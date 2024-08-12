package com.demo.service;

import java.util.List;

import com.demo.beans.Product;

public interface ProductService {

	List<Product> getAllProducts();

	Product getById(int id);

	int addProduct(Product p);

	int modifyProduct(Product p);

	void deleteById(int id);

	List<Product> getByPrice(double lowprice, double highprice);

}
