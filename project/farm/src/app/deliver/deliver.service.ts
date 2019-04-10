import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../../environments/environment';
import {Deliver_Detail} from './deliver';

@Injectable({
  providedIn: 'root'
})
export class DeliverService {
  uri = 'http://localhost:3000/deliverdetails';

  constructor(private http: HttpClient) { }
  
  addDeliverDetail(recipient_name, recipient_phone, delivery_address,delivery_city,location_type, delivery_date) {
    const obj = {
      recipient_name: recipient_name,
      recipient_phone: recipient_phone,
      delivery_address: delivery_address,
      delivery_city:delivery_city,
      location_type:location_type,
      delivery_date:delivery_date

    };
    console.log(obj);
    this.http.post(environment.apiBaseUrl2+'/deliverdetails', obj)
        .subscribe(res => console.log('Done'));
  }

  
}
