import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NotFoundLayoutComponent } from './not-found-layout/not-found-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    NotFoundLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AuthLayoutComponent
  ]
})
export class LayoutModule { }
