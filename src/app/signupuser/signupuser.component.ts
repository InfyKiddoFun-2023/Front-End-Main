import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.scss']
})
export class SignupuserComponent implements OnInit {

  type: string = "password"
  isText: boolean =false;
  eyeIcon: string = "fa-eye-slash";
  constructor() { }

  ngOnInit(): void {
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa fa-eye-slash" : this.eyeIcon = "fa fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
}
