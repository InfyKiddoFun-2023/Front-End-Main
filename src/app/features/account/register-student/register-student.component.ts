import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/enums/subject.enum';
import { StudentRegisterRequest } from 'src/app/models/users/student-register-request';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html'
})
export class RegisterStudentComponent {
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.registerRequest = this.formBuilder.group({
      userName: [null],
      password: [null],
      confirmPassword: [null],
      firstName: [null],
      lastName: [null],
      email: [null],
      phoneNumber: [null],
      aboutMe: [null],
      subjects: [[] as Subject[]]
    });
  }

  ngOnInit(): void {

  }

  registerRequest: FormGroup;

  getSubjects() {
    return Object.values(Subject).filter(value => typeof value === 'string') as string[];
  }

  get subjectValue() {
    return Subject[this.registerRequest.get('subjects')?.value];
  }

  setSubject(subject: String) {
    let key: keyof typeof Subject = subject as keyof typeof Subject;
    this.registerRequest.controls['subjects'].setValue(Subject[key])
  }

  onSubmit() {
    this.userService.registerStudent(this.registerRequest.value as StudentRegisterRequest)
      .subscribe(result => {
        if(result.succeeded) {
          alert('Registration successful');
          this.router.navigateByUrl('/account/login');
        } else {
          alert('Registration failed');
        }
      });
  }
}
