import { Injectable } from '@angular/core';
import { HttpClientService } from './http/http-client.service';
import { HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from './http/env-url.service';
import { TypedResult } from '../models/wrapper/typed-result';
import { TokenResponse } from '../models/auth/token-response';
import { Observable } from 'rxjs';
import { ClaimsDataService } from './claims-data.service';

enum UserRole {
  Unauthorized = '',
  Student = 'Student',
  Mentor = 'Mentor',
  Parent = 'Parent'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpClientService {

  constructor(private httpClient: HttpClient, private claimDataService: ClaimsDataService, private envUrl: EnvironmentUrlService) {
    super(envUrl);
    if(!this.isAuthenticated) {
      this._userRole = UserRole.Unauthorized;
    } else {
      this._userRole = claimDataService.role;
    }   
  }

  _userRole: UserRole;

  public get isAuthenticated() {
    return localStorage.getItem('authToken') != null;
  }

  public get userRole() { return this._userRole; }

  public set userRole(role: UserRole) { this._userRole = role; }

  loginStudent(userName: string, password: String): Observable<TypedResult<TokenResponse>> {
    return this.httpClient.post<TypedResult<TokenResponse>>(
      this.getRoute('api/users/student/token/get'),
      { userName: userName, password: password },
      { headers: this.getHeaders() }
    );
  }

  loginMentor(userName: string, password: String): Observable<TypedResult<TokenResponse>> {
    return this.httpClient.post<TypedResult<TokenResponse>>(
      this.getRoute('api/users/mentor/token/get'),
      { userName: userName, password: password },
      { headers: this.getHeaders() }
    );
  }

  loginParent(userName: string, password: String): Observable<TypedResult<TokenResponse>> {
    return this.httpClient.post<TypedResult<TokenResponse>>(
      this.getRoute('api/users/parent/token/get'),
      { userName: userName, password: password },
      { headers: this.getHeaders() }
    );
  }
}
