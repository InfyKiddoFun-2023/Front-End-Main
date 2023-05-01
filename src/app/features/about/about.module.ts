import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: AboutComponent },
      { path: '**', redirectTo: 'not-found' }
    ]
  }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
