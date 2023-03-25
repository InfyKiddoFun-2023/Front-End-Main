import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionsComponent } from './sessions/sessions.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CoursesComponent } from './courses/courses.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { SignupmentorComponent } from './signupmentor/signupmentor.component';
import { SignupparentComponent } from './signupparent/signupparent.component';
import { CreateassignmentComponent } from './createassignment/createassignment.component';
import { UploadassignmentComponent } from './uploadassignment/uploadassignment.component';
import { ChooseassignmentComponent } from './chooseassignment/chooseassignment.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'sessions', component: SessionsComponent},
  {path: 'assignments', component: AssignmentsComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signupuser', component:SignupuserComponent},
  {path: 'signupmentor', component:SignupmentorComponent},
  {path: 'signupparent', component:SignupparentComponent},
  {path: 'createassignment', component:CreateassignmentComponent},
  {path: 'uploadassignment', component: UploadassignmentComponent},
  {path: 'chooseassignment', component: ChooseassignmentComponent},
  {path: 'student', component: StudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
