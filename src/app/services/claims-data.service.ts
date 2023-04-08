import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class ClaimsDataService {
    constructor(private jwtHelperService: JwtHelperService) { 
        this.reloadClaims();
    }

    reloadClaims() {
        this.claims = this.jwtHelperService.decodeToken(localStorage.getItem('authToken')!);
    }

    private claims: any;

    get userName() {
        return this.claims.UserName;
    }
    
    get firstName() {
        return this.claims.FirstName;
    }
    
    get lastName() {
        return this.claims.LastName;
    }

    get userId() {
        return this.claims.Id;
    }
    
    get email() {
        return this.claims.Email;
    }

    get phoneNumber() {
        return this.claims.PhoneNumber;
    }

    get role() {
        return this.claims.Role;
    }
}