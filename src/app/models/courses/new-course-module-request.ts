export interface NewCourseModuleRequest {
    order: number;
    title: string;
    description: string;
    startDate: Date;
    courseId: string;
}