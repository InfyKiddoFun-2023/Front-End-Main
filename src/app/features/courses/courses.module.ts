import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentCourseService } from 'src/app/services/student-course.service';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { MentorCoursesComponent } from './mentor-courses/mentor-courses.component';
import { MentorCourseService } from 'src/app/services/mentor-course.service';
import { CreateNewCourseComponent } from './create-new-course/create-new-course.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CoursesComponent },
  { path: 'new', component: CreateNewCourseComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    CoursesComponent,
    StudentCoursesComponent,
    MentorCoursesComponent,
    CreateNewCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [StudentCourseService, MentorCourseService]
})
export class CoursesModule { }
