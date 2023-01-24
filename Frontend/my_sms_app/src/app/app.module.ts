import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
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
import { ReactiveFormsModule } from "@angular/forms";
import { BodyComponent } from './body/body.component';

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
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,  
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
