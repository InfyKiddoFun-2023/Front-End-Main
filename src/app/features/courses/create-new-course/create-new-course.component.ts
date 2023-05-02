import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewCourseRequest } from 'src/app/models/courses/new-course-request';
import { AgeGroup } from 'src/app/models/enums/age-group.enum';
import { DifficultyLevel } from 'src/app/models/enums/difficulty-level';
import { Subject } from 'src/app/models/enums/subject.enum';
import { ClaimsDataService } from 'src/app/services/claims-data.service';
import { MentorCourseService } from 'src/app/services/mentor-course.service';

@Component({
  selector: 'app-create-new-course',
  templateUrl: './create-new-course.component.html'
})
export class CreateNewCourseComponent {

  newCourseRequest: FormGroup;

  constructor(private mentorCourseService: MentorCourseService, private claimDataService: ClaimsDataService, private formBuilder: FormBuilder, private router: Router) {
    this.newCourseRequest = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      ageGroup: [0, [Validators.required]],
      difficultyLevel: [0, [Validators.required]],
      startDate: [new Date(), [Validators.required]],
      subject: [Subject[claimDataService.subject], [Validators.required]],
      createDate: [new Date(), [Validators.required]],
    });
  }

  get startDate() {
    return this.newCourseRequest.controls['startDate'].value;
  }

  getAgeGroupText(enumValue: number) {
    return AgeGroup[enumValue];
  }

  getAgeGroups() {
    return Object.values(AgeGroup).filter(value => typeof value === 'string') as AgeGroup[]
  }

  setAgeGroup(ageGroup: String) {    
    let key: keyof typeof AgeGroup = ageGroup as keyof typeof AgeGroup;
    this.newCourseRequest.controls['ageGroup'].setValue(AgeGroup[key])
  }

  getDifficultyLevelText(enumValue: number) {
    return DifficultyLevel[enumValue];
  }

  getDifficultyLevels() {
    return Object.values(DifficultyLevel).filter(value => typeof value === 'string') as DifficultyLevel[]
  }

  setDifficultyLevel(difficultyLevel: String) {
    let key: keyof typeof DifficultyLevel = difficultyLevel as keyof typeof DifficultyLevel;
    this.newCourseRequest.controls['difficultyLevel'].setValue(DifficultyLevel[key])
  }

  onSubmit() {
    this.newCourseRequest.controls['startDate'].setValue(new Date(this.newCourseRequest.controls['startDate'].value));
    this.mentorCourseService.createCourse(this.newCourseRequest.value as NewCourseRequest)
      .subscribe(result => {
        if(result.succeeded) {
          alert('Course created successfully');
          this.router.navigateByUrl('/courses/' + result.data + '/modules');
        } else {
          alert('Course creation failed');
        }
      }
    );
  }
}
