import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundLayoutComponent } from './layout/not-found-layout/not-found-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', canActivate: [AuthGuard], loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
      { path: 'explore', canActivate: [AuthGuard], loadChildren: () => import('./features/explore/explore.module').then(m => m.ExploreModule) },
      { path: 'courses', canActivate: [AuthGuard], loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
      { path: 'about', canActivate: [AuthGuard], loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
      { path: '**', redirectTo: 'not-found' }
    ]
  },
  {
    path: 'account', component: AuthLayoutComponent, loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule)
  },
  { path: 'not-found', component: NotFoundLayoutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'account/login' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
