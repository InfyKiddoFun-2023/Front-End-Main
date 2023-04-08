import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


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
