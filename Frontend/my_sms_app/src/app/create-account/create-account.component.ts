import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service'; 


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  resourceForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['',Validators.required],
    email: ['', Validators.email],
    address: ['', Validators.required],
    password: ['', Validators.required]
  });

  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserServiceService
    ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    
    // this.userService.addUser(
    //   this.resourceForm.value.firstName!,
    //   this.resourceForm.value.lastName!,
    //   this.resourceForm.value.password!,
    //   this.resourceForm.value.email!,
    //   this.resourceForm.value.address!,
    // ).subscribe((response) => {
    // });

    this.userService.signupUser(
      this.resourceForm.value.phoneNumber!,
      this.resourceForm.value.password!,
      this.resourceForm.value.firstName!,
      this.resourceForm.value.lastName!,
      this.resourceForm.value.email!,
      this.resourceForm.value.address ?? undefined,
    ).subscribe((response) => {
      // const data = response.data[response.data.length-1];
      console.log(response.data);
      // localStorage.setItem("user-id",data.id);
    })
    
    // this.router.navigate(['/sms']);
    
  }
}
