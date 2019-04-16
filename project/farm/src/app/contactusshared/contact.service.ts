import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  selectedContact: Contact;
  contact: Contact[];
  readonly baseURL = 'http://localhost:3000/contact/';

  constructor(private http: HttpClient) { }

  postContact(con: Contact) {
    return this.http.post(this.baseURL, con);
  }
  getContactList() {
    return this.http.get(this.baseURL);
  }

  putContact(con: Contact) {
    return this.http.put(this.baseURL + `/${con._id}`, con);
  }

  deleteContact(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }


}
