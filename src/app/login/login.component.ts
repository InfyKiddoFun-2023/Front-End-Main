import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  loginUser(event: any) {
    event.preventDefault();
    console.log(event);
    var username = event.target.elements[0].value;
    var password = event.target.elements[1].value;
    if (username == 'admin@gmail.com' && password == 'admin') {
      this.router.navigate(['/', 'admin']);
    } else if (username == 'student@gmail.com' && password == 'student') {
      this.router.navigate(['/', 'student']);
    }
  }
}
// export class LoginComponent implements OnInit {

//   type: string = "password"
//   isText: boolean =false;
//   eyeIcon: string = "fa-eye-slash";
//   constructor() { }

//   ngOnInit(): void{
//   }

//   hideShowPass(){
//     this.isText = !this.isText;
//     this.isText ? this.eyeIcon = "fa fa-eye-slash" : this.eyeIcon = "fa fa-eye-slash";
//     this.isText ? this.type ="text" : this.type ="password";
//   }

// }
