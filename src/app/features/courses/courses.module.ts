import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentCourseService } from 'src/app/services/student-course.service';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { MentorCoursesComponent } from './mentor-courses/mentor-courses.component';
import { MentorCourseService } from 'src/app/services/mentor-course.service';
import { CreateNewCourseComponent } from './create-new-course/create-new-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageModulesComponent } from './manage-modules/manage-modules.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MentorCourseDetailComponent } from './mentor-course-detail/mentor-course-detail.component';
import { StudentCourseDetailComponent } from './student-course-detail/student-course-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CoursesComponent, data: { animation: 'Courses'} },
  { path: 'new', component: CreateNewCourseComponent, data: { animation: 'NewCourse'} },
  { path: ':id', component: CourseDetailComponent, data: { animation: 'CourseDetail'} },
  { path: ':id/modules', component: ManageModulesComponent, data: { animation: 'ManageModules'} },
  { path: ':id/edit', component: EditCourseComponent, data: { animation: 'EditCourse'} },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    CoursesComponent,
    StudentCoursesComponent,
    MentorCoursesComponent,
    CreateNewCourseComponent,
    CourseDetailComponent,
    ManageModulesComponent,
    EditCourseComponent,
    MentorCourseDetailComponent,
    StudentCourseDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [StudentCourseService, MentorCourseService]
})
export class CoursesModule { }
