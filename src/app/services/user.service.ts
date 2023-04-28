import { Injectable } from "@angular/core";
import { HttpClientService } from "./http/http-client.service";
import { HttpClient } from "@angular/common/http";
import { EnvironmentUrlService } from "./http/env-url.service";
import { StudentRegisterRequest } from "../models/users/student-register-request";
import { MentorRegisterRequest } from "../models/users/mentor-register-request";
@Injectable({
    providedIn: "root"
})
export class UserService extends HttpClientService {
    constructor(private httpClient: HttpClient, private envUrl: EnvironmentUrlService) {
        super(envUrl);
    }

    registerStudent(registerRequest: StudentRegisterRequest) {
        return this.httpClient.post(
            this.getRoute('api/users/student/register'),
            registerRequest,
            { headers: this.getHeaders() }
        );
    }

    registerMentor(registerRequest: MentorRegisterRequest) {
        return this.httpClient.post(
            this.getRoute('api/users/mentor/register'),
            registerRequest,
            { headers: this.getHeaders() }
        );
    }
}