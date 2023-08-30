import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: IndexComponent },
  { path: 'courses', loadChildren: () => import('./courses/course-details-routes').then(routes => routes.CoursesListRoutes) },
  { path: 'about-async-training', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(c => c.CartComponent) },
  { path: 'portal', loadChildren: () => import('./portal/portal-routes').then(routes => routes.PortalRoutes) },
];
