export interface CourseResponse {
    id: string;
    title: string;
    description: string;
    mentorName: string;
    mentorId: string;
    ageGroup: string;
    stream: string;
    difficultyLevel: string;
    createdDate: string;
    startDate: string;
    enrollments: number;
}