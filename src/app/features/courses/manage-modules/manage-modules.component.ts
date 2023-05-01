import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseFullResponse } from 'src/app/models/courses/course-full-response';
import { CourseService } from 'src/app/services/course.service';
import { MentorCourseService } from 'src/app/services/mentor-course.service';

@Component({
  selector: 'app-manage-modules',
  templateUrl: './manage-modules.component.html'
})
export class ManageModulesComponent implements OnInit {
  
  constructor(private courseService: CourseService, private mentorCourseService: MentorCourseService, private route: ActivatedRoute, private router: Router) { }

  private courseId: String = '';
  private _isLoading: boolean = false;
  public get isLoading(): boolean { return this._isLoading; }
  private course: CourseFullResponse | null = null;

  ngOnInit(): void {
    this._isLoading = true;
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.courseService.getCourse(this.courseId).subscribe(result => {
        if (result.succeeded) {
          this.course = result.data;
        } else {
          alert('Failed to load course: {0}'.replace('{0}', result.messages[0].toString()));
        }
        this._isLoading = false;
      });
    });
  }
}
