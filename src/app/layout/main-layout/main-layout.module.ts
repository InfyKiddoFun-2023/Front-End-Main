import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'explore', loadChildren: () => import('../../features/explore/explore.module').then(m => m.ExploreModule), canActivate: [AuthGuard] },
  { path: 'courses', loadChildren: () => import('../../features/courses/courses.module').then(m => m.CoursesModule), canActivate: [AuthGuard] },
  { path: 'about', loadChildren: () => import('../../features/about/about.module').then(m => m.AboutModule), canActivate: [AuthGuard] },
]


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MainLayoutComponent,
    RouterModule
  ]
})
export class MainLayoutModule { }
