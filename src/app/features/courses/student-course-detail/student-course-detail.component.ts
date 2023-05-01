import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CourseFullResponse } from 'src/app/models/courses/course-full-response';
import { StudentCourseService } from 'src/app/services/student-course.service';

@Component({
  selector: 'app-student-course-detail',
  templateUrl: './student-course-detail.component.html'
})
export class StudentCourseDetailComponent implements OnChanges {

  constructor(private studentService: StudentCourseService) { }
  // ngOnInit(): void {
  //   let courseId = this.course?.id;
  //   if (courseId) {
  //     this.studentService.isEnrolled(courseId).subscribe(result => {
  //       if (result.succeeded) {
  //         this.isEnrolled = result.data;
  //       } else {
  //         alert('Failed to load course: {0}'.replace('{0}', result.messages[0].toString()));
  //       }        
  //     });
  //   }
  // }

  ngOnChanges(): void {
    let courseId = this.course?.id;
    if (courseId) {
      this.studentService.isEnrolled(courseId).subscribe(result => {
        if (result.succeeded) {
          this.isEnrolled = result.data;
        } else {
          alert('Failed to load course: {0}'.replace('{0}', result.messages[0].toString()));
        }        
      });
    }
  }

  isEnrolled: Boolean = false;

  enroll(): void {
    let courseId = this.course?.id;
    if (courseId) {
      this.studentService.enrollCourse(courseId).subscribe(result => {
        if (result.succeeded) {
          this.isEnrolled = true;
        } else {
          alert('Failed to enroll course: {0}'.replace('{0}', result.messages[0].toString()));
        }
      });
    }
  }

  get startDate() {
    return new Date(this.course?.startDate ?? '').toLocaleDateString();
  }

  @Input() 
  public course: CourseFullResponse | null = null;
}
