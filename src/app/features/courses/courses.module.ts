import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentCourseService } from 'src/app/services/student-course.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CoursesComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [StudentCourseService]
})
export class CoursesModule { }
