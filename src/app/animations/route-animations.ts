import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

const slideRightSteps = [
    query(':enter, :leave',
        style({ position: 'absolute', width: '100%' }),
        { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out',
                style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out',
                style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
    ])
];


const slideLeftSteps = [
    query(':enter, :leave',
        style({ position: 'absolute', width: '100%' }),
        { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out',
                style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out',
                style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
    ])
];

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Home => *', slideRightSteps),
        transition('Explore => Home', slideLeftSteps),
        transition('Explore => Browse', slideRightSteps),
        transition('Browse => Explore', slideLeftSteps),
        transition('Explore => *', slideRightSteps),

        transition('Courses => NewCourse', slideRightSteps),
        transition('NewCourse => Courses', slideLeftSteps),

        transition('Courses => EditCourse', slideRightSteps),
        transition('EditCourse => Courses', slideRightSteps),

        transition('NewCourse => ManageModules', slideRightSteps),
        transition('ManageModules => NewCourse', slideLeftSteps),
        transition('ManageModules => Courses', slideLeftSteps),

        
        transition('Courses => CourseDetail', slideRightSteps),
        transition('CourseDetail => Courses', slideLeftSteps),  
        transition('CourseDetail => ManageModules', slideRightSteps),
        transition('ManageModules => CourseDetail', slideLeftSteps),
              
        transition('Browse => CourseDetail', slideRightSteps),
        transition('CourseDetail => Browse', slideLeftSteps),

        transition('Courses => About', slideRightSteps),
        transition('Courses => *', slideLeftSteps),

        transition('About => *', slideLeftSteps),
    ]);
