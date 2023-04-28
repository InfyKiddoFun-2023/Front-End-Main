import { Subject } from "../enums/subject.enum";

export interface StudentRegisterRequest {
    userName: String,
    password: String,
    confirmPassword: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    aboutMe: String,
    ageGroup: Number,
    subjects: Subject[],
}