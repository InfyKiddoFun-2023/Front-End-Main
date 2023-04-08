import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class EnvironmentUrlService {
    urlAddress: string = environment.hostName;
    constructor() { }
}