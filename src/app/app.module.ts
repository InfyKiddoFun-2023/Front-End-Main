import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { ClaimsDataService } from './services/claims-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('authToken');
        },
        allowedDomains: ['localhost:7251'],
        disallowedRoutes: [
          'localhost:7251/api/users/mentor/token/get',
          'localhost:7251/api/users/student/token/get',
          'localhost:7251/api/users/parent/token/get'
        ]
      }
    })
  ],
  providers: [AuthGuard, AuthService, ClaimsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
