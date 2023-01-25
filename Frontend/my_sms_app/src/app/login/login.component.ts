import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid: boolean = true;

  loginForm = this.fb.group({
    Phonenumber: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  public ngOnInit(): void {}

  recover() {
    this.router.navigate(['/recover']);
  }

  signUp() {
    this.router.navigate(['/createAccount']);
  }

  signIn() {
    this.router.navigate(['/card'])
  }

}
