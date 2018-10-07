package com.adminportal.service.impl;

import com.adminportal.domain.Product;
import com.adminportal.repository.ProductRepository;
import com.adminportal.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product save(Product product){
        return productRepository.save(product);
    }

    public List<Product> findAll(){
        return (List<Product>) productRepository.findAll();
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    public void removeOne(Long id){productRepository.deleteById(id);}

}
