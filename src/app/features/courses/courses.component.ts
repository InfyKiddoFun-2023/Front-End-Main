import { Component, OnInit } from '@angular/core';
import { CourseResponse } from 'src/app/models/courses/course-response';
import { ClaimsDataService } from 'src/app/services/claims-data.service';
import { StudentCourseService } from 'src/app/services/student-course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {

  private role: String;

  constructor(claimDataService: ClaimsDataService) {
    this.role = claimDataService.role;
  }
  
  get isStudent(): boolean {
    return this.role === 'Student';
  }

  get isMentor(): boolean {
    return this.role === 'Mentor';
  }

  get isParent(): boolean {
    return this.role === 'Parent';
  }
}
