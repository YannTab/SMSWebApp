import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecoverPasswordConfirmComponent } from './recover-password-confirm/recover-password-confirm.component';
import { RecoverDialogComponent } from './recover-dialog/recover-dialog.component';
import { CardComponent } from './card/card.component';
import { ConsultContactComponent } from './consult-contact/consult-contact.component';
import { ConsultSmsComponent } from './consult-sms/consult-sms.component';
import { ImportContactComponent } from './import-contact/import-contact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SaveContactComponent } from './save-contact/save-contact.component';
import { SmsComponent } from './sms/sms.component';

@NgModule({
  declarations: [
    AppComponent,
    RecoverPasswordComponent,
    RecoverPasswordConfirmComponent,
    RecoverDialogComponent,
    CardComponent,
    ConsultContactComponent,
    ConsultSmsComponent,
    ImportContactComponent,
    CreateAccountComponent,
    SaveContactComponent,
    SmsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,  
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
