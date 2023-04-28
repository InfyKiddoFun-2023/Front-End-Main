import { HttpClient } from "@angular/common/http";
import { EnvironmentUrlService } from "./http/env-url.service";
import { HttpClientService } from "./http/http-client.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginatedResult } from "../models/wrapper/paginated-result";
import { CourseResponse } from "../models/courses/course-response";

@Injectable({
    providedIn: "root"
})
export class MentorCourseService extends HttpClientService {
    constructor(private httpClient: HttpClient, private envUrl: EnvironmentUrlService) {
        super(envUrl);
    }

    getMentorCourses(pageNumber: number, pageSize: number, searchString: String) : Observable<PaginatedResult<CourseResponse>> {
        return this.httpClient.get<PaginatedResult<CourseResponse>>(
            this.getRoute('api/mentor/courses'),
            {
                headers: this.getHeaders(true),
                params: {
                    pageNumber: pageNumber.toString(),
                    pageSize: pageSize.toString(),
                    searchString: searchString.toString()
                }
            }
        );
    }
}