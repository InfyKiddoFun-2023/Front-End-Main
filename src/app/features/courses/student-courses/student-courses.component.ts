import { Component, OnInit } from '@angular/core';
import { CourseResponse } from 'src/app/models/courses/course-response';
import { StudentCourseService } from 'src/app/services/student-course.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html'
})
export class StudentCoursesComponent implements OnInit {
  constructor(private studentCourseService: StudentCourseService) { }

  private _pageNumber: number = 1;
  private pageSize: number = 10;
  private searchString: string = '';

  courses: CourseResponse[] = [];
  
  ngOnInit(): void {
    this.getCourses();
  }

  get pageNumber(): number { return this._pageNumber; }

  set pageNumber(pageNumber: number) {
    this._pageNumber = pageNumber;
    this.getCourses();
  }

  getCourses() {
    this.studentCourseService.getStudentCourses(this.pageNumber, this.pageSize, this.searchString)
      .subscribe(response => {
        this.courses = response.data;
      });
  }
}
