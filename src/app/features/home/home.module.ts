import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
