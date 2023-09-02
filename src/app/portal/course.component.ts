import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule } from '@angular/router';


/**
 * @title Main portal component for course listing
 */
@Component({
  selector: 'async-portal-courses',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class PortalCoursesListComponent { }