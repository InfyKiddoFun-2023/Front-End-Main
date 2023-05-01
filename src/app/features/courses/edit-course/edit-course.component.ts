import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseFullResponse } from 'src/app/models/courses/course-full-response';
import { CourseService } from 'src/app/services/course.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html'
})
export class EditCourseComponent implements OnInit {
  constructor(private route: ActivatedRoute, private courseService: CourseService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });
    this.courseService.getCourse(this.courseId).subscribe(result => {
      if (result.succeeded) {
        this.course = result.data;
      } else {
        alert('Failed to load course: {0}'.replace('{0}', result.messages[0].toString()));
        this.location.back();
      }
    });
  }

  private courseId: String = '';
  private _isLoading: boolean = false;
  public get isLoading(): boolean { return this._isLoading; }
  private course: CourseFullResponse | null = null;
}
