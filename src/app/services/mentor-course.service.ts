import { HttpClient } from "@angular/common/http";
import { EnvironmentUrlService } from "./http/env-url.service";
import { HttpClientService } from "./http/http-client.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginatedResult } from "../models/wrapper/paginated-result";
import { CourseResponse } from "../models/courses/course-response";
import { NewCourseRequest } from "../models/courses/new-course-request";
import { TypedResult } from "../models/wrapper/typed-result";
import { Result } from "../models/wrapper/result";
import { NewCourseModuleRequest } from "../models/courses/new-course-module-request";

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

    createCourse(createCourseRequest: NewCourseRequest) {
        return this.httpClient.post<TypedResult<String>>(
            this.getRoute('api/mentor/courses/add'),
            createCourseRequest,
            { headers: this.getHeaders(true) }
        );
    }

    deleteCourse(courseId: String) {
        return this.httpClient.delete<Result>(
            this.getRoute('api/mentor/courses/' + courseId),
            { headers: this.getHeaders(true) }
        );
    }

    createCourseModule(newCourseModuleRequest: NewCourseModuleRequest) {
        return this.httpClient.post<Result>(
            this.getRoute('api/mentor/courses/module/add'),
            newCourseModuleRequest,
            { headers: this.getHeaders(true) }
        );
    }
}