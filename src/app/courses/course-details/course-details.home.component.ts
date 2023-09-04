import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CourseDetailsIntroComponent } from './course-details.intro.component';
import { CourseDetailsAboutComponent } from './course-details.about/course-details.about.component';
import { CourseDetailsBannerComponent } from './banner/banner.component';
import { CourseDetailsOutcomesComponent } from './course-details.outcome/course-details.outcome.component';
import { Subscription } from 'rxjs';
import { CourseInterface } from '../course.interface';
import { CourseService } from '../course.service';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../../_common/spinner.compnent';
import { LoadingSpinnerService } from '../../_common/services/loader/spinner.service';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';

@Component({
  selector: 'async-course-details-home',
  standalone: true,
  providers: [CourseService],
  imports: [MatToolbarModule, CommonModule, LoadingSpinnerComponent, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, CourseDetailsIntroComponent, CourseDetailsAboutComponent, CourseDetailsOutcomesComponent, CourseDetailsBannerComponent],
  template: `
  <async-loading-spinner *ngIf="loadingSpinnerService.isShowing()"></async-loading-spinner>
   <section class="breadcrumb-wrapper" *ngIf="isEmptyCourse" [ngClass]="isDarkMode ? 'dark-mode' : ''">
      <!-- show when viewing from outside portal -->
      <div class="breadcrumb" *ngIf="!isPortalView">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a> &gt;
          <a routerLink="/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Courses</a> &gt;
          <span>{{course.title | titlecase}}</span>
      </div>

      <!-- show when viewing from inside portal -->
      <div class="breadcrumb" *ngIf="isPortalView" [ngClass]="isDarkMode ? 'dark-mode' : ''">
          <a routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a> &gt;
          <a routerLink="/portal/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Courses</a> &gt;
          <span>{{course.title | titlecase}}</span>
      </div>
    </section>

    <async-course-details-intro id="intro" [course]="course" *ngIf="isEmptyCourse"></async-course-details-intro>
    <async-course-details-banner id="banner" [course]="course" *ngIf="isEmptyCourse"></async-course-details-banner>
    <async-course-details-about id="about" [course]="course" *ngIf="isEmptyCourse"></async-course-details-about>
    <async-course-details-outcomes id="outcomes" [course]="course" *ngIf="isEmptyCourse"></async-course-details-outcomes>
  `,
  styleUrls: [`../my-courses/my-courses.dark-theme.scss`]
})
export class CourseDetailsHomeComponent implements OnInit, OnDestroy { 
  subscriptions: Subscription[] = [];
  id: string = '';
  course!: CourseInterface;
  isEmptyCourse = false;
  isPortalView = false;
  isDarkMode: boolean = false;

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    public loadingSpinnerService: LoadingSpinnerService,
    private themeTogglerService: ThemeTogglerService
  ) {}

  ngOnInit(): void {
    this.loadingSpinnerService.show();
    if (this.router.url.includes('portal')) {
      // portal course view
      this.isPortalView = true;
    } else {
      // its not portal course view
      this.isPortalView = false;
    }
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        if (this.id) {
          this.courseService.getCourse(this.id).subscribe(course => {
            if (course) {
              this.course = course;
              this.isEmptyCourse = true;
              this.loadingSpinnerService.hide()
            }
          })
        }
      })
    );

    this.subscriptions.push(
      // Subscribe to the action
      this.themeTogglerService.toggleAction$.subscribe((isDarkMode) => {
        // check theme toogle status
        this.isDarkMode = isDarkMode;
        //console.log('Action triggered in nav.', isDarkMode);
      })
    )
 
  }

  ngOnDestroy(): void {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
