import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundLayoutComponent } from './layout/not-found-layout/not-found-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, loadChildren: () => import('./layout/main-layout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'account', loadChildren: () => import('./layout/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule) },
  { path: 'not-found', component: NotFoundLayoutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'account/login'},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
