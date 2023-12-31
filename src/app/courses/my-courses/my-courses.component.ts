import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
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
  <section class="breadcrumb-wrapper">
    <div class="breadcrumb">
        <a routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a> &gt;
        <a routerLink="/portal/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Courses</a> &gt;
        <span>My Courses </span>
    </div>
  </section>

    <section>
    <async-loading-spinner *ngIf="loadingSpinnerService.isShowing()"></async-loading-spinner>

    <div class="courses-list">
      <article>Registered Courses</article>
    </div>

    <div class="search-box" *ngIf="filteredCourseList.length > 0 || filteredCourseList.length == 0">
      <mat-form-field appearance="outline">
        <mat-label>Search or filter courses</mat-label>
        <input matInput [(ngModel)]="filterCourse">
        <button *ngIf="filterCourse" matSuffix mat-icon-button aria-label="Clear" (click)="filterCourse=''">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </div>

  
    <ng-template [ngIf]="filteredCourseList.length > 0">
      <section class="course">
        <mat-card *ngFor="let course of filteredCourseList; index as i;" (click)="viewMyCourseDetail(course._id)">
          <img mat-card-image src="assets/img/{{course.img}}" alt="Web Development">

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
    <div class="no-course-found">
        <p>No course found</p>
    </div>
  </ng-template>


    </section>
  `,
  styleUrls: [`my-courses.component.scss`]
})
export class MyCoursesComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  filterCourse = '';
  courses!: Array<CourseInterface>;
  user!: UserInterface;

  constructor(
    private router: Router,
    private courseService: CourseService,
    public loadingSpinnerService: LoadingSpinnerService,
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
          this.courses = this.user.courses.sort(() => Math.random() - Math.random()) // list random course from list
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
  }

  viewMyCourseDetail(courseId: string): void {
    // redirect to course route
    this.router.navigate([`/portal/courses/my-courses/details/${courseId}`])
  }

  ngOnDestroy(): void {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}