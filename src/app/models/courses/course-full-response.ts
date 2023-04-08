export interface CourseFullResponse {
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
    modules: CourseModuleResponse[];
}

export interface CourseModuleResponse {
    id: string;
    title: string;
    description: string;
    courseId: string;
    order: number;
    startDate: string;
    materials: CourseMaterialResponse[];
    quizTitle: string;
    quizQuestions: number;
}

export interface CourseMaterialResponse {
    id: string;
    title: string;
    link: string;
    order: number;
    moduleId: string;
    materialType: string;
}