import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CourseFullResponse } from 'src/app/models/courses/course-full-response';

@Component({
  selector: 'app-mentor-course-detail',
  templateUrl: './mentor-course-detail.component.html'
})
export class MentorCourseDetailComponent {

  constructor(private location: Location) { }

  @Input() 
  public course: CourseFullResponse | null = null;
}
