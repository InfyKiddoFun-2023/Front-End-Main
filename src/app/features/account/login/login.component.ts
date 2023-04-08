import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenResponse } from 'src/app/models/auth/token-response';
import { TypedResult } from 'src/app/models/wrapper/typed-result';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  tokenRequest: FormGroup;

  roles = ['Mentor','Student','Parent']

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.tokenRequest = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      userType: [null, [Validators.required]]
    });
  }

  setUserType(e: any) {
    this.tokenRequest.get('userType')?.setValue(e.target.value, { onlySelf: true });
  }

  private get userName() {
    return this.tokenRequest.get('userName');
  }

  private get password() {
    return this.tokenRequest.get('password');
  }
  
  get userType() {
    return this.tokenRequest.get('userType');
  }

  onSubmit() {
    let observable: Observable<TypedResult<TokenResponse>>;
    switch (this.userType?.value) {
      case 'Student':        
        observable = this.authService.loginStudent(this.userName?.value, this.password?.value);
        break;
      case 'Mentor':
        observable = this.authService.loginMentor(this.userName?.value, this.password?.value);
        break;
      case 'Parent':
        observable = this.authService.loginParent(this.userName?.value, this.password?.value);
        break;
      default:      
        throw new Error('Invalid user type');
    }
    if(observable == null) return;
    observable.subscribe(result => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      if (result.succeeded) {
        localStorage.setItem('authToken', result.data.token);
        localStorage.setItem('refreshToken', result.data.refreshToken);
        this.authService.userRole = this.userType?.value;
        alert('Welcome ' + this.userName?.value);
        this.router.navigateByUrl('/home');
      } else {
        alert(result.messages.join('\n'));
      }
    });
  }
}
