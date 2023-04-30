import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { CourseFullResponse } from 'src/app/models/courses/course-full-response';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
  constructor(private courseService: CourseService, private route: ActivatedRoute, private location: Location) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.id === undefined || this.id === null || this.id === '') {
      alert('Invalid course id');
      this.location.back();
    }
    this.courseService.getCourse(this.id ?? '').subscribe(course => {
      this.course = course;
    });
  }

  id?: String;
  course?: CourseFullResponse;
}
