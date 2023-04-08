import { HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './env-url.service';

export abstract class HttpClientService {

  constructor(public envUrlService: EnvironmentUrlService) {}

  protected getHeaders(setAuthToken: boolean = false) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*',
      'Access-Control-Allow-Origin': 'true'
    });
    if (setAuthToken) {
      const token = localStorage.getItem('authToken');
      if (token != null && token != '') {
        headers.append('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  }

  protected getRoute(route: String) {
    return `${this.envUrlService.urlAddress}/${route}`
  }
}
