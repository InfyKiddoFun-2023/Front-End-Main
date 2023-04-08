import { Component, OnInit } from '@angular/core';
import { CourseResponse } from 'src/app/models/courses/course-response';
import { StudentCourseService } from 'src/app/services/student-course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  constructor(private studentCourseService: StudentCourseService) { }

  private _pageNumber: number = 1;
  private pageSize: number = 10;
  private searchString: string = '';

  private courses: CourseResponse[] = [];
  
  ngOnInit(): void {
    
  }

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
