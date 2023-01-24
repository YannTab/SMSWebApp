import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recover-password-confirm',
  templateUrl: './recover-password-confirm.component.html',
  styleUrls: ['./recover-password-confirm.component.css']
})
export class RecoverPasswordConfirmComponent implements OnInit {

  Form = this.fb.group({
    code: ['', Validators.required],
    password: ['', Validators.required],
    passwordConf: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    
  ) { }

  ngOnInit(): void {
  }


}
