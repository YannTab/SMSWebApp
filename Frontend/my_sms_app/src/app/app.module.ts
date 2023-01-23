import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SaveContactComponent } from './save-contact/save-contact.component';
import { ImportContactComponent } from './import-contact/import-contact.component';
import { ConsultContactComponent } from './consult-contact/consult-contact.component';
import { SmsComponent } from './sms/sms.component';
import { ConsultSmsComponent } from './consult-sms/consult-sms.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    RecoverPasswordComponent,
    SaveContactComponent,
    ImportContactComponent,
    ConsultContactComponent,
    SmsComponent,
    ConsultSmsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
