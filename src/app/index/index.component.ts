import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BannerComponent } from './banner/banner.component';
import { WhyWeExistComponent } from './why-we-exist/why-we-exist.component';
import { IntroCoursesComponent } from './intro-courses/intro-courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@Component({
  selector: 'async-index',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, BannerComponent, WhyWeExistComponent, IntroCoursesComponent, TestimonialsComponent],
  template: `
    
    <async-index-banner></async-index-banner>
    <async-index-why-we-exist></async-index-why-we-exist>
    <async-index-intro-courses></async-index-intro-courses>
    <async-index-testimonials></async-index-testimonials>
  `,
  styles: [`
  `]
})
export class IndexComponent { }