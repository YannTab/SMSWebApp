import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ConsultSmsComponent } from './consult-sms/consult-sms.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ImportContactComponent } from './import-contact/import-contact.component';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SaveContactComponent } from './save-contact/save-contact.component';
import { SmsComponent } from './sms/sms.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'recoverPassword', component: RecoverPasswordComponent },

  { 
    path: 'card',
    component: CardComponent,
    children: [
      { path: 'saveContact', component: SaveContactComponent },
      { path: 'importContact', component: ImportContactComponent },
      { path: 'consultContact', component: ImportContactComponent },
      { path: 'sms', component: SmsComponent },
      { path: 'consultSms', component: ConsultSmsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
