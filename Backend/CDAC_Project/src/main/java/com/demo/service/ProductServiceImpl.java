package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Product;
import com.demo.dao.ProductDao;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired 
	ProductDao pdao;

	@Override
	public List<Product> getAllProducts() {
		return pdao.findAll();
	}

	@Override
	public Product getById(int id) {
		Optional<Product> op=pdao.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		return null;
	}

	@Override
	public int addProduct(Product p) {
		Product p1=pdao.save(p);
		if(p1!=null)
			return 1;
		else
			return 0;
	}

	@Override
	public int modifyProduct(Product p) {
		//bring the data in persistent state
		Optional<Product> p1=pdao.findById(p.getPid());
		//int cnt=pdao.getCount();
		//System.out.println("count : "+cnt);
		//update data
		if(p1.isPresent()) {
			Product p2=p1.get();
			p2.setPname(p.getPname());
			p2.setQty(p.getQty());
			p2.setPrice(p.getPrice());
			pdao.save(p2);
			return 1;
		}
		return 0;
	}

	@Override
	public void deleteById(int id) {
		pdao.deleteById(id);
	}

	@Override
	public List<Product> getByPrice(double lowprice, double highprice) {
		return pdao.findByprice(lowprice,highprice);
	}
    
    
}
