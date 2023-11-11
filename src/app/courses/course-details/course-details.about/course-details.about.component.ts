import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseInterface } from '../../course.interface';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CourseDetailsBannerComponent } from '../banner/banner.component';


@Component({
  selector: 'async-course-details-about',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, CourseDetailsBannerComponent],
  template: `
   <section class="course-detail-about">
    <article class="writeup">
      <h3>About the Course</h3>
      <p [innerHTML]="course.about"></p>
    </article>

    <article class="course-detail-about-banner">
      <async-course-details-banner [course]="course"></async-course-details-banner>
    </article>
   </section>
  `,
  styleUrls: [`course-details.about.light-theme.scss`]
})
export class CourseDetailsAboutComponent implements OnInit, OnDestroy {
  @Input() course!: CourseInterface
  subscriptions: Array<Subscription> = [];
  isDarkMode: boolean = false;

  constructor() {}

  ngOnInit(): void { }

  ngOnDestroy(): void {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
