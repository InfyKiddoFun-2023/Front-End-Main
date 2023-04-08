import { Injectable } from "@angular/core";
import { HttpClientService } from "./http/http-client.service";
import { HttpClient } from "@angular/common/http";
import { EnvironmentUrlService } from "./http/env-url.service";

@Injectable({
    providedIn: "root"
})
export class StudentCourseService extends HttpClientService {
    constructor(private httpClient: HttpClient, private envUrl: EnvironmentUrlService) {
        super(envUrl);
    }

    getStudentCourses(pageNumber: number, pageSize: number, searchString: string) {
        return this.httpClient.get(
            this.getRoute(`api/student/courses?pageNumber=${pageNumber}&pageSize=${pageSize}&searchString=${searchString}`),
            { headers: this.getHeaders() }
        );
    }
}