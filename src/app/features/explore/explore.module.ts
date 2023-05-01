import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowseCoursesComponent } from './browse-courses/browse-courses.component';
import { SharedModule } from "../../shared/shared.module";
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent,
        children: [
            { path: '', pathMatch: 'full', component: ExploreComponent },
            { path: 'browse', component: BrowseCoursesComponent },
            { path: '**', redirectTo: 'not-found' }
        ]
    }
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
