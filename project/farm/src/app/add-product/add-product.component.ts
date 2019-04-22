import { Component, OnInit } from '@angular/core';
//import { ValidateService } from '../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';
//import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {ProductService } from '../product/product.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private ds: ProductService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      product_name: ['', Validators.required ],
      product_img: ['', Validators.required ],
      product_description: ['', Validators.required ],
      product_price: ['', Validators.required ],
      product_category: ['', Validators.required ]
    });
  }

  addProduct(product_name,product_img,product_description,product_price,product_category) {
    this.ds.addProduct(product_name,product_img,product_description,product_price,product_category);
  }

  ngOnInit() {
  }

  

}



