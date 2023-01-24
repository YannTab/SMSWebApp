import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountComponent } from './create-account/create-account.component';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SaveContactComponent } from './save-contact/save-contact.component';
import { ConsultContactComponent } from './consult-contact/consult-contact.component';
import { ImportContactComponent } from './import-contact/import-contact.component';
import { ConsultSmsComponent } from './consult-sms/consult-sms.component';
import { CardComponent } from './card/card.component';
import { SmsComponent } from './sms/sms.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'recoverPassword', component: RecoverPasswordComponent },
  { path: 'consultSms', component: ConsultSmsComponent },
  { path: 'sms', component: SmsComponent },
  { path: 'saveContact', component: SaveContactComponent },
  { path: 'importContact', component: ImportContactComponent },
  { path: 'consultContact', component: ConsultContactComponent },
  {path: 'card',component: CardComponent,},
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
