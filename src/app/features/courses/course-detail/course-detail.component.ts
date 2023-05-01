import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { CourseFullResponse } from 'src/app/models/courses/course-full-response';
import { ClaimsDataService } from 'src/app/services/claims-data.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
  constructor(private courseService: CourseService, private route: ActivatedRoute, private location: Location, private claimDataService: ClaimsDataService) {
    this.role = claimDataService.role;
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.id === undefined || this.id === null || this.id === '') {
      alert('Invalid course id');
      this.location.back();
    }
    this.courseService.getCourse(this.id ?? '').subscribe(result => {
      if(result.succeeded) {
        this.course = result.data;
      } else {
        alert('Failed to load course: {0}'.replace('{0}', result.messages[0].toString()));
        this.location.back();
      }
    });
  }

  id?: String;
  course: CourseFullResponse | null = null;
  private role: String;

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
