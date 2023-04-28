import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ExploreComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    ExploreComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExploreModule { }
