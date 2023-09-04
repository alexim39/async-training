import { Routes } from "@angular/router";
import { CoursesListComponent } from "./courses-list.component";
import { CoursesListHomeComponent } from "./courses-list-home/courses-list.home.component";
import { CourseDetailsHomeComponent } from "./course-details/course-details.home.component";

export const CoursesListRoutes: Routes = [

  {
    path: '',
    component: CoursesListComponent,
    children: [
      {
        path: '',
        component: CoursesListHomeComponent,
        title:"Courses list - Courses available for study"
      },
      {
        path: 'details/:id',
        component: CourseDetailsHomeComponent,
        title:"Course details - Course available for study"
      },
      
    ]
  },

]
