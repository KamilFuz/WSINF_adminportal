package com.adminportal.service.impl;

import com.adminportal.domain.Product;
import com.adminportal.repository.ProductRepository;
import com.adminportal.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product save(Product product){
        return productRepository.save(product);
    }

}
