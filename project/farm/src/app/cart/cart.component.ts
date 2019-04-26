import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {ProductService } from '../product/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private ds: ProductService) {
  
  }


  addimg(image) {
    this.ds.addimg(image);
  }
  ngOnInit() {
  }

}

