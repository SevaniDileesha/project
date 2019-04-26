import { Component, OnInit } from '@angular/core';
//import { AuthService } from "../../services/auth.service";
//import { Router } from "@angular/router";
import {Product} from '../product/product';
import {ProductService } from '../product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products: Product[];

  constructor(private bs: ProductService) { }

  ngOnInit() {
    this.bs
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
    });
  }

}
