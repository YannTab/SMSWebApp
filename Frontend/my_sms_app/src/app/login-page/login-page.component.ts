import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

})
export class LoginPageComponent {
  
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

}
