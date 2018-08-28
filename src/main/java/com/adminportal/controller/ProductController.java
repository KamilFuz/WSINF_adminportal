package com.adminportal.controller;

import com.adminportal.domain.Product;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/product")
public class ProductController {

    @RequestMapping("/add")
    public String addProduct(Model model){
        Product product = new Product();
        model.addAttribute("product", product);
        return "addProduct";

    }
}