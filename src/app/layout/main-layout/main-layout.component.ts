import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animations/route-animations';
import { ClaimsDataService } from 'src/app/services/claims-data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  animations: [ slideInAnimation ],
})
export class MainLayoutComponent implements OnInit {

  constructor(private claimsDataService: ClaimsDataService) { }

  ngOnInit(): void {
    this.claimsDataService.reloadClaims();
    this.userName = this.claimsDataService.firstName + ' ' + this.claimsDataService.lastName;
  }

  userName: String = '';

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    alert('You have been logged out');
    window.location.reload();
  }

  getRouteAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
