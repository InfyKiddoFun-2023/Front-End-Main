import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AuthLayoutComponent, loadChildren: () => import('../../features/account/account.module').then(m => m.AccountModule) },
]

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AuthLayoutComponent,
    RouterModule
  ]
})
export class AuthLayoutModule { }
