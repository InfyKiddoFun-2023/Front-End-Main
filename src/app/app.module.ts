import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SessionsComponent } from './sessions/sessions.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
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


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    CoursesComponent,
    StatisticsComponent,
    SessionsComponent,
    AssignmentsComponent,
    MediaComponent,
    SettingsComponent,
    AboutusComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    SignupuserComponent,
    SignupmentorComponent,
    SignupparentComponent,
    CreateassignmentComponent,
    UploadassignmentComponent,
    ChooseassignmentComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
