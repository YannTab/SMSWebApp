import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RecoverPasswordConfirmComponent } from './recover-password-confirm/recover-password-confirm.component';
import { RecoverDialogComponent } from './recover-dialog/recover-dialog.component';


const routes: Routes = [

  { path: '', component: LoginPageComponent },
  { path: 'createAccount', component: CreateAccountComponent},
  { path: 'recover',component: RecoverPasswordComponent},
  { path: 'recoverConfirm', component: RecoverPasswordConfirmComponent},
  { path: 'recoverDialog', component: RecoverDialogComponent}
  
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
