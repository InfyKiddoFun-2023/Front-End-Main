import { Injectable } from "@angular/core";
import { HttpClientService } from "./http/http-client.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { EnvironmentUrlService } from "./http/env-url.service";
import { PaginatedResult } from "../models/wrapper/paginated-result";
import { CourseResponse } from "../models/courses/course-response";

@Injectable({
    providedIn: "root"
})
export class StudentCourseService extends HttpClientService {
    constructor(private httpClient: HttpClient, private envUrl: EnvironmentUrlService) {
        super(envUrl);
    }

    getStudentCourses(pageNumber: number, pageSize: number, searchString: string) {
        return this.httpClient.get<PaginatedResult<CourseResponse>>(            
            this.getRoute('api/student/courses'),
            {
                headers: this.getHeaders(),
                params: new HttpParams()
                    .set('pageNumber', pageNumber.toString())
                    .set('pageSize', pageSize.toString())
                    .set('searchString', searchString)
            }
        );
    }
}