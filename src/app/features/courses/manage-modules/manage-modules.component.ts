import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseFullResponse, CourseModuleResponse } from 'src/app/models/courses/course-full-response';
import { NewCourseModuleRequest } from 'src/app/models/courses/new-course-module-request';
import { CourseService } from 'src/app/services/course.service';
import { MentorCourseService } from 'src/app/services/mentor-course.service';

@Component({
  selector: 'app-manage-modules',
  templateUrl: './manage-modules.component.html'
})
export class ManageModulesComponent implements OnInit {
  
  constructor(private courseService: CourseService, private mentorCourseService: MentorCourseService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  private courseId: String = '';
  private _isLoading: boolean = false;
  public get isLoading(): boolean { return this._isLoading; }
  course: CourseFullResponse | null = null;
  courseModules: CourseModuleResponse[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.loadCourse();
    });
  }

  loadCourse() {
    this._isLoading = true;
    this.courseService.getCourse(this.courseId).subscribe(result => {
      if (result.succeeded) {
        this.course = result.data;
        this.courseModules = this.course.modules.sort((a, b) => a.order - b.order);
      } else {
        alert('Failed to load course: {0}'.replace('{0}', result.messages[0].toString()));
      }
      this._isLoading = false;
    });
  }

  newCourseModuleRequest: FormGroup = new FormGroup({});

  addModuleModal() {
    this.newCourseModuleRequest = this.formBuilder.group({
      onder: [(this.course?.modules.length ?? 0) + 1, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [new Date(), [Validators.required]],
      courseId: [this.courseId, [Validators.required]],
    });
  }

  getDate(date: string) {
    //date string to date object to formated date
    return new Date(date).toLocaleDateString();    
  }

  addModule() {
    this.mentorCourseService.createCourseModule(this.newCourseModuleRequest.value as NewCourseModuleRequest).subscribe(result => {
      if(result.succeeded) {
        alert('Module created successfully');
        this.loadCourse();
      } else {
        alert('Failed to create module: {0}'.replace('{0}', result.messages[0].toString()));
      }
    });
  }
}
