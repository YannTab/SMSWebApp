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

  resourceForm = this.fb.group({
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


  }

  send() {

  }

}
