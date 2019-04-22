import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:3000/addproduct';
  constructor(private http: HttpClient) { }

  addProduct(product_name,product_img,product_description,product_price,product_category) {
    const obj = {
      product_name: product_name,
      product_img: product_img,
      product_description: product_description,
      product_price:product_price,
      product_category:product_category
    };
    console.log(obj);
    this.http.post(environment.apiBaseUrl3+'/addproduct', obj)
        .subscribe(res => console.log('Done'));
  }
}
