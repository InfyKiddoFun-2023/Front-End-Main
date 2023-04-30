import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(public courseService: CourseService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this._searchString = params['search'] ?? '';
      this.ageGroup = +(params['std']) ?? null;
      this.subject = +(params['sub']);
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
  private subject: Subject | null = null;
  subjects: Subject[] = [];
  private ageGroup: AgeGroup | null = null;

  courses: CourseResponse[] = [];

  get searchString(): String { return this._searchString ?? ''; }

  setSearchString(searchString: string) {
    this._searchString = searchString;
    this.pageNumber = 1;
    let queryParams: any = { search: searchString };
    if (this.subject) {
      queryParams.sub = this.subject;
    }
    if (this.ageGroup) {
      queryParams.std = this.ageGroup;
    }
    this.router.navigate(['/explore/browse'], { queryParams: queryParams });
  }

  getCourses(pageNumber: number = this.pageNumber) {
    this.courseService.getCourses(pageNumber, this.pageSize, this.searchString, this.ageGroup, this.subject).subscribe(response => {
      if (response.succeeded) {
        this.pageNumber = Number(response.currentPage);
        this.courses = response.data;
        this.totalItems = Number(response.totalCount);
        this.totalPages = Number(response.totalPages);
      }
    }); 
  }

  getSubjects() {
    return Object.values(Subject).map(value => Number(value)).filter(value => !isNaN(value));
  }

  getSubjectText(enumValue: number) {
    return Subject[enumValue];
  }

  get subjectValue() {
    if (!Number.isNaN(this.subject)) {
      return this.subject;
    } else {
      return 'All';
    }
  }

  getAgeGroupText(enumValue: number) {
    return AgeGroup[enumValue];
  }

  getAgeGroups() {
    return Object.values(AgeGroup).map(value => Number(value)).filter(value => !isNaN(value));
  }
}
