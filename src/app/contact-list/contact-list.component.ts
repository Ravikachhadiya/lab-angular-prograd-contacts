import { contacts } from './../contact';
import { userContact } from './../userContact';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contact: userContact[];
  newContact: any = {};
  constructor() { }

  ngOnInit() {
    this.contact = contacts;
  }

  addContact(newContact): any {
    console.log('Add contact has been called');
     this.contact.unshift(newContact);
    alert("New contact added");
   
  }
}
