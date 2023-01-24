import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  signForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    confPassword: ['', Validators.required],
  });


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }


  public saveData(){  
    
  }
}
