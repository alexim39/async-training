import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LoadingSpinnerComponent } from 'src/app/_common/spinner.compnent';
import { CourseInterface } from '../course.interface';
import { CourseService } from '../course.service';
import { LoadingSpinnerService } from 'src/app/_common/services/loader/spinner.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { UserInterface, UserService } from 'src/app/_common/services/user.service';
import { Emitters } from 'src/app/_common/emitters/emitters';

/**
 * @title My course component
 */
@Component({
  selector: 'async-my-courses',
  standalone: true,
  providers: [CourseService, UserService],
  imports: [MatButtonModule, LoadingSpinnerComponent, FormsModule, MatInputModule, MatIconModule, MatFormFieldModule, MatCardModule, RouterModule, NgOptimizedImage, CommonModule],
  template: `
  <!-- show when viewing from inside portal -->
  <section class="breadcrumb-wrapper" [ngClass]="isDarkMode ? 'dark-mode' : ''">
    <div class="breadcrumb">
        <a routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a> &gt;
        <a routerLink="/portal/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Courses</a> &gt;
        <span>My Courses </span>
    </div>
  </section>

    <section [ngClass]="isDarkMode ? 'dark-mode' : ''">
    <async-loading-spinner *ngIf="loadingSpinnerService.isShowing()"></async-loading-spinner>

    <div class="courses-list">
      <article>Registered Courses</article>
    </div>

    <div class="search-box" *ngIf="filteredCourseList.length > 0 || filteredCourseList.length == 0" [ngClass]="isDarkMode ? 'dark-mode' : ''">
      <mat-form-field appearance="outline">
        <mat-label>Search or filter courses</mat-label>
        <input matInput [(ngModel)]="filterCourse">
        <button *ngIf="filterCourse" matSuffix mat-icon-button aria-label="Clear" (click)="filterCourse=''">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </div>

  
    <ng-template [ngIf]="filteredCourseList.length > 0">
      <section [ngClass]="isDarkMode ? 'dark-mode' : ''">
        <mat-card *ngFor="let course of filteredCourseList; index as i;">
          <img mat-card-image src="assets/img/web-design.jpg" alt="Web Development">

          <mat-card-content>
            <h1> {{course.title | titlecase}}</h1>
            <p>{{course.coursePitch | slice:0:250 }}...</p>
          </mat-card-content>

          <mat-card-actions>
            <div class="price">
              <span class="current">&#8358;{{course.currentPrice}}</span> <span class="divider"> | </span> <span class="old"> &#8358;{{course.oldPrice}}</span>
            </div>
            <div class="duration"> <span class="material-icons">calendar_month</span> {{course.duration | titlecase}}</div>
            <div class="join"><span class="material-icons">arrow_forward</span></div>
          </mat-card-actions>
        </mat-card>
      </section>
  </ng-template>
  <ng-template [ngIf]="filteredCourseList.length == 0">
    <div class="no-course-found" [ngClass]="isDarkMode ? 'dark-mode' : ''">
        <p>No course found</p>
    </div>
  </ng-template>


    </section>
  `,
  styleUrls: [`my-courses.light-theme.scss`, `my-courses.dark-theme.scss`]
})
export class MyCoursesComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  isDarkMode: boolean = false;
  filterCourse = '';
  courses!: Array<CourseInterface>;
  user!: UserInterface;

  constructor(
    private router: Router,
    private courseService: CourseService,
    public loadingSpinnerService: LoadingSpinnerService,
    private themeTogglerService: ThemeTogglerService,
    private userService: UserService,
  ) { }

  get filteredCourseList(): CourseInterface[] {
    return this.courses.filter(course => course.title.toLowerCase().includes(this.filterCourse.toLowerCase()));
  }

  ngOnInit(): void {
    this.loadingSpinnerService.show();

    this.subscriptions.push(
      this.userService.getUser().subscribe(
        res => {
          this.user = res as UserInterface;
          this.courses = this.user.courses
          this.loadingSpinnerService.hide();
        },
        error => {
          //console.log(error)
          Emitters.authEmitter.emit(false);
          // redirect to home page
          this.router.navigate(['/'])
        }
      )
    )
      
    

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