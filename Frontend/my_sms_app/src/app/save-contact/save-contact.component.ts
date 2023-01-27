import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactServiceService } from '../services/contact-service.service';

@Component({
  selector: 'app-save-contact',
  templateUrl: './save-contact.component.html',
  styleUrls: ['./save-contact.component.css']
})
export class SaveContactComponent implements OnInit {

  resourceForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    phoneNumber: ['',Validators.required]
  });
  
  constructor(
    private fb: FormBuilder,
    private contactService: ContactServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  addContact() {
    this.contactService.addContact(
      this.resourceForm.value.firstName!,
      this.resourceForm.value.lastName!,
      this.resourceForm.value.email!,
      this.resourceForm.value.phoneNumber!

    ).subscribe((response) => {
      console.log(response);
    })
    this.router.navigate(['/consultContact']);
  }

}
