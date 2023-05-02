/**
 * {
  "title": "string",
  "description": "string",
  "ageGroup": 0,
  "difficultyLevel": 0,
  "subject": 0,
  "createdDate": "2023-05-01T08:13:36.200Z",
  "startDate": "2023-05-01T08:13:36.200Z"
}
 */

import { AgeGroup } from "../enums/age-group.enum";
import { DifficultyLevel } from "../enums/difficulty-level";

export interface NewCourseRequest {
    title: String,
    description: String,
    ageGroup: AgeGroup,
    difficultyLevel: DifficultyLevel,
    subject: Number,
    createdDate: Date,
    startDate: Date
}