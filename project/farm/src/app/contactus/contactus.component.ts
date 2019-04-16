import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contactusshared/contact.service';
import { Contact } from '../contactusshared/contact.model';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [ContactService]
})
export class ContactusComponent implements OnInit {

  constructor(private contactService: ContactService) { }


  ngOnInit() {

    this.resetForm();
    this.refreshContactList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.contactService.selectedContact = {
      _id: "",
      name: "",
      email: "",
      contactn: null,
      comment: ""

    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.contactService.postContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContactList();

      });
    }
    else {
      this.contactService.putContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContactList();

      });
    }
  }

  refreshContactList() {
    this.contactService.getContactList().subscribe((res) => {
      this.contactService.contact = res as Contact[];
    });
  }

}
