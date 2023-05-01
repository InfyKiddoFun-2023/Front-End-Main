import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterMentorComponent } from './register-mentor/register-mentor.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AccountComponent,
    RegisterStudentComponent,
    RegisterMentorComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
