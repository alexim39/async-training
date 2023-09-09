import { Routes } from "@angular/router";
import { PortalComponent } from "./portal.component";
import { CoursesListHomeComponent } from "../courses/courses-list-home/courses-list.home.component";
import { PortalMainComponent } from "./portal.main.component";
import { CourseDetailsHomeComponent } from "../courses/course-details/course-details.home.component";
import { PortalCoursesListComponent } from "./course.component";
import { MyCoursesComponent } from "../courses/my-courses/my-courses.component";
import { SettingsComponent } from "./settings/settings.component";
import { MyCoursesHomeComponent } from "../courses/my-courses/my-courses.home.component";
import { MyCoursesDetailsComponent } from "../courses/my-courses/my-courses-details/my-courses-details.component";
import { PaymentMsgComponent } from "./payment/payment-msg.component";

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
        component: PortalCoursesListComponent,
        children: [
          {
            path: '',
            component: CoursesListHomeComponent,
            title:"Courses available - Course available for study",
          },
          {
            path: 'details/:id',
            component: CourseDetailsHomeComponent,
            title:"Course details - Course available for study"
          },
          {
            path: 'my-courses',
            component: MyCoursesHomeComponent,
            title:"My courses details - Course available for my study",
            children: [
              {
                path: '',
                component: MyCoursesComponent
              },
              {
                path: 'details/:courseId',
                component: MyCoursesDetailsComponent
              }
            ]
          },
          
        ]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title:"Settings - Dashboard management area"
      },
      {
        path: 'payment',
        component: PaymentMsgComponent,
        title:"Course payment - Courses payment page",
      },
    ],
  },

]
