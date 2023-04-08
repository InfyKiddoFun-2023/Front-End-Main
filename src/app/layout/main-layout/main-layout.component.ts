import { Component, OnInit, ɵdetectChanges } from '@angular/core';
import { ClaimsDataService } from 'src/app/services/claims-data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
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
}
