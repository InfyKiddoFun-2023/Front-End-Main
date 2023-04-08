import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from 'src/app/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'login', component: AuthLayoutComponent, children: [{path:'', component: LoginComponent}] },
  { path: 'register', component: AuthLayoutComponent, children: [{path:'', component: RegisterComponent}] },
  { path: 'forgot-password', component: AuthLayoutComponent, children: [{ path: '', component: ForgotPasswordComponent }] },
  { path: '', pathMatch: 'full', component: MainLayoutComponent, children: [{ path: '', component: AccountComponent }] },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
