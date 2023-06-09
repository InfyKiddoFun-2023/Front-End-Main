import { Injectable } from "@angular/core";
import { HttpClientService } from "./http/http-client.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { EnvironmentUrlService } from "./http/env-url.service";
import { PaginatedResult } from "../models/wrapper/paginated-result";
import { CourseResponse } from "../models/courses/course-response";
import { CourseFullResponse } from "../models/courses/course-full-response";
import { Subject } from "../models/enums/subject.enum";
import { AgeGroup } from "../models/enums/age-group.enum";
import { TypedResult } from "../models/wrapper/typed-result";

@Injectable({
    providedIn: "root"
})
export class CourseService extends HttpClientService {
    constructor(private httpClient: HttpClient, private envUrl: EnvironmentUrlService) {
        super(envUrl);
    }

    getCoursesBySubject(pageNumber: number, pageSize: number, searchString: String, subject: Subject) {
        return this.httpClient.get<PaginatedResult<CourseResponse>>(            
            this.getRoute('api/courses/subject/' + subject),
            {
                headers: this.getHeaders(true),
                params: new HttpParams()
                    .set('pageNumber', pageNumber.toString())
                    .set('pageSize', pageSize.toString())
                    .set('searchQuery', searchString.toString())
            }
        );
    }

    getCoursesByAgeGroup(pageNumber: number, pageSize: number, searchString: String, ageGroup: AgeGroup) {
        return this.httpClient.get<PaginatedResult<CourseResponse>>(
            this.getRoute('api/courses/age-group/' + ageGroup),
            {
                headers: this.getHeaders(true),
                params: new HttpParams()
                    .set('pageNumber', pageNumber.toString())
                    .set('pageSize', pageSize.toString())
                    .set('searchQuery', searchString.toString())
            }
        );
    }

    getCourses(pageNumber: Number, pageSize: Number, searchString: String, ageGroup: AgeGroup | null, subject: Subject | null) {
        return this.httpClient.get<PaginatedResult<CourseResponse>>(            
            this.getRoute('api/courses'),
            {
                headers: this.getHeaders(true),
                params: new HttpParams()
                    .set('pageNumber', pageNumber.toString())
                    .set('pageSize', pageSize.toString())
                    .set('searchQuery', searchString.toString())
                    .set('subject', (!Number.isNaN(subject) ? subject : '') ?? '')
                    .set('ageGroup', (!Number.isNaN(ageGroup) ? ageGroup : '') ?? '')

            }
        );
    }

    getCourse(id: String) {
        return this.httpClient.get<TypedResult<CourseFullResponse>>(            
            this.getRoute('api/courses/' + id),
            {
                headers: this.getHeaders(true)
            }
        );
    }
}