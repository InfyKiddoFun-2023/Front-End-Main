import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundLayoutComponent } from './layout/not-found-layout/not-found-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [  
  { path: 'account', loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule) },
  { path: 'home', component: MainLayoutComponent, canActivate: [AuthGuard], loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'explore', component: MainLayoutComponent, canActivate: [AuthGuard], loadChildren: () => import('./features/explore/explore.module').then(m => m.ExploreModule) },
  { path: 'courses', component: MainLayoutComponent, canActivate: [AuthGuard], loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'reports', component: MainLayoutComponent, canActivate: [AuthGuard], loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'sessions', component: MainLayoutComponent, canActivate: [AuthGuard], loadChildren: () => import('./features/sessions/sessions.module').then(m => m.ReportsModule) },
  { path: 'about', component: MainLayoutComponent, canActivate: [AuthGuard], loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path: 'not-found', component: NotFoundLayoutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'account/login'},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
