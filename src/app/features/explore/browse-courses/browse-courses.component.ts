import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseResponse } from 'src/app/models/courses/course-response';
import { AgeGroup } from 'src/app/models/enums/age-group.enum';
import { Subject } from 'src/app/models/enums/subject.enum';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-browse-courses',
  templateUrl: './browse-courses.component.html'
})
export class BrowseCoursesComponent implements OnInit {
  constructor(public courseService: CourseService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.pageNumber = +(params.get('pageNumber') ?? '1');
      this._searchString = params.get('searchString') || '';
      this.ageGroup = +(params.get('std') ?? '');
      this.getCourses();
    });
    this.userService.getStudentSubjects().subscribe(response => {
      if (response.succeeded) {
        this.subjects = response.data;
      }
    });
  }

  pageNumber: number = 1;
  pageSize: number = 12;
  private _searchString: string = '';
  totalItems: number = 0;
  totalPages: number = 0;
  private subjects: Subject[] = [];
  private ageGroup?: AgeGroup;

  courses: CourseResponse[] = [];

  get searchString(): String { return this._searchString ?? ''; }

  setSearchString(searchString: string) {
    this._searchString = searchString;
    this.pageNumber = 1;
    this.getCourses();
  }

  getCourses(pageNumber: number = this.pageNumber) {
    if (this.ageGroup) {
      this.courseService.getCoursesByAgeGroup(pageNumber, this.pageSize, this.searchString, this.ageGroup)
        .subscribe(response => {
          if (response.succeeded) {
            this.pageNumber = Number(response.currentPage);
            this.courses = response.data;
            this.totalItems = Number(response.totalCount);
            this.totalPages = Number(response.totalPages);
          }
        });
    } else {
      this.courseService.getCourses(pageNumber, this.pageSize, this.searchString)
        .subscribe(response => {
          if (response.succeeded) {
            this.pageNumber = Number(response.currentPage);
            this.courses = response.data;
            this.totalItems = Number(response.totalCount);
            this.totalPages = Number(response.totalPages);
          }
        });
    }
  }
}
