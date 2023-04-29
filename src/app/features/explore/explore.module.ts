import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowseCoursesComponent } from './browse-courses/browse-courses.component';
import { UserService } from 'src/app/services/user.service';
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ExploreComponent },
  { path: 'browse', component: BrowseCoursesComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    declarations: [
        ExploreComponent,
        BrowseCoursesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class ExploreModule { }
