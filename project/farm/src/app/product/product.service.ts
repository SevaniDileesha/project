import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:3000/addproduct';
  uri1 = 'http://localhost:3000/addimage';

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
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  addimg(image) {
    const obj = {
     image:image
    };
    console.log(obj);
    this.http.post('http://localhost:3000/addimage'+'/post', obj)
        .subscribe(res => console.log('Done'));
  }
  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }


}
