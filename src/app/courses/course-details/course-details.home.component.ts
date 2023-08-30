import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CourseDetailsIntroComponent } from './course-details.intro.component';
import { CourseDetailsAboutComponent } from './course-details.about.component';
import { CourseDetailsBannerComponent } from './banner/banner.component';
import { CourseDetailsOutcomesComponent } from './course-details.outcome.component';

@Component({
  selector: 'async-course-details-home',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, CourseDetailsIntroComponent, CourseDetailsAboutComponent, CourseDetailsOutcomesComponent, CourseDetailsBannerComponent],
  template: `
    <async-course-details-intro id="intro"></async-course-details-intro>
    <async-course-details-banner id="banner"></async-course-details-banner>
    <async-course-details-about id="about"></async-course-details-about>
    <async-course-details-outcomes id="outcomes"></async-course-details-outcomes>
  `,
  styles: [`
  `]
})
export class CourseDetailsHomeComponent { }
