import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ContactServiceService } from '../services/contact-service.service';
import { UserServiceService } from '../services/user-service.service';

export interface Contact {
  email: string;
  id: number;
  number: number;
  name: string;
}



@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  public contacts = [];
  title : string = '';
  position : number = 0;

  smsForm = this.fb.group({
    sms: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private contactService: ContactServiceService,
  ) { }

  ngOnInit(): void {

    this.contactService.loadContact().subscribe((response) => {
      this.contacts = response;
    });

    console.log(localStorage.getItem('user-id'));

  }

  onSendSms() {

    this.userService.sendSms(
      this.smsForm.value.sms,
      this.contacts[this.position].id,
      1

    ).subscribe((response) => {
      console.log(response);
    })


  }

  onConsult(id : number) {
    this.title = this.contacts[id].firstName;
    this.position = id;
  }

}
