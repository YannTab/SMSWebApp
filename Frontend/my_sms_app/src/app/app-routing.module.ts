import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecoverPasswordConfirmComponent } from './recover-password-confirm/recover-password-confirm.component';
import { RecoverDialogComponent } from './recover-dialog/recover-dialog.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SmsComponent } from './sms/sms.component';
import { ConsultContactComponent } from './consult-contact/consult-contact.component';
import { ImportContactComponent } from './import-contact/import-contact.component';
import { SaveContactComponent } from './save-contact/save-contact.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [

  { path: '', component: LoginPageComponent },
  { path: 'recover',component: RecoverPasswordComponent},
  { path: 'recoverConfirm', component: RecoverPasswordConfirmComponent},
  { path: 'recoverDialog', component: RecoverDialogComponent},
  { path: 'createAccount', component: CreateAccountComponent},
  { path: 'login', component: LoginPageComponent},
  {
    path: 'card',
    component: CardComponent,
    children: [
      { path: 'sms',component: SmsComponent},
      {path: 'consultContact', component: ConsultContactComponent},
      {path: 'importContact', component: ImportContactComponent},
      {path: 'saveContact', component: SaveContactComponent },
    ],
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
