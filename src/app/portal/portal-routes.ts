import { Routes } from "@angular/router";
import { PortalComponent } from "./portal.component";
import { CoursesListHomeComponent } from "../courses/courses-list.home.component";
import { PortalMainComponent } from "./portal.main.component";
import { CourseDetailsHomeComponent } from "../courses/course-details/course-details.home.component";

export const PortalRoutes: Routes = [

  {
    path: '',
    component: PortalComponent,
    children: [
     {
        path: '',
        component: PortalMainComponent,
        title:"Async Training Portal - Manage your learning"
      },
      {
        path: 'courses',
        component: CoursesListHomeComponent,
        title:"Course details - Course available for study"
      },
      {
        path: 'details/:id',
        component: CourseDetailsHomeComponent,
        title:"Course details - Course available for study"
      },
    ]
  },

]
