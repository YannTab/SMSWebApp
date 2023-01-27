import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid: boolean = true;

  loginForm = this.fb.group({
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService
  ) {}

  public ngOnInit(): void {}

  recoverPassword() {
    this.router.navigate(['/recover']);
  }

  signUp() {
    this.router.navigate(['/createAccount']);
  }

  signIn() {
    this.router.navigate(['/sms'])
  }

  login(){
    this.userService.loginUser(
      this.loginForm.value.phoneNumber!, 
      this.loginForm.value.password!
    ).subscribe((response) => {
      console.log(response.data)
      // localStorage.setItem("user-id",data.id);
    })
    
    // this.router.navigate(['/sms']);
  }
}
