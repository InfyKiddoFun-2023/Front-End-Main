import { Component, OnInit } from '@angular/core';
import { CourseResponse } from 'src/app/models/courses/course-response';
import { MentorCourseService } from 'src/app/services/mentor-course.service';

@Component({
  selector: 'app-mentor-courses',
  templateUrl: './mentor-courses.component.html'
})
export class MentorCoursesComponent implements OnInit {
  constructor(private mentorCourseService: MentorCourseService) { }

  private _pageNumber: number = 1;
  private pageSize: number = 10;
  private _searchString: String = 'ABC';
  private _isLoading: boolean = false;
  public get isLoading(): boolean { return this._isLoading; }

  courses: CourseResponse[] = [];
  
  ngOnInit(): void {
    this.getCourses();
  }

  get searchString(): String { return this._searchString ?? ''; }

  setSearchString(searchString: string) {
    this._searchString = searchString;
    this.getCourses();
  }

  get pageNumber(): number { return this._pageNumber; }

  set pageNumber(pageNumber: number) {
    this._pageNumber = pageNumber;
    this.getCourses();
  }

  getCourses() {
    this._isLoading = true;
    this.mentorCourseService.getMentorCourses(this.pageNumber, this.pageSize, this.searchString)
      .subscribe(response => {
        this.courses = response.data;
        this._isLoading = false;
      });
  }
}
