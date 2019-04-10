import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {DeliverService } from '../deliver/deliver.service';


@Component({
  selector: 'app-deliver-details',
  templateUrl: './deliver-details.component.html',
  styleUrls: ['./deliver-details.component.css']
})
export class DeliverDetailsComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private ds: DeliverService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      recipient_name: ['', Validators.required ],
      recipient_phone: ['', Validators.required ],
      delivery_address: ['', Validators.required ],
      delivery_city: ['', Validators.required ],
      location_type: ['', Validators.required ],
      delivery_date: ['', Validators.required ]
    });
  }

  addDeliverDetail(recipient_name, recipient_phone, delivery_address,delivery_city,location_type, delivery_date) {
    this.ds.addDeliverDetail(recipient_name, recipient_phone, delivery_address,delivery_city,location_type, delivery_date);
  }
  ngOnInit() {
  }

}
