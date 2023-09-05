import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'async-index-intro-courses',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, NgOptimizedImage, MatIconModule, CommonModule],
  styleUrls: ['intro-courses.component.scss'],
  template: `
    <section id="intro-course">

      <mat-card (click)="loadCourse()">
        <img mat-card-image src="assets/img/web-design.jpg" alt="Web Development">

        <mat-card-content>
          <h1> Web Development</h1>
          <p>
          Ready to master web development? Our program covers coding essentials and crafting interactive websites. Start your journey to becoming a pro developer today!
          </p>
        </mat-card-content>

        <mat-card-actions>
          <div class="price">
            <span class="current">&#8358;25,000.00</span> <span class="divider"> | </span> <span class="old"> &#8358;45,000.00</span>
          </div>
          <div class="duration"> <span class="material-icons">calendar_month</span> 4 Weeks</div>
          <div class="join"><span class="material-icons">arrow_forward</span></div>
        </mat-card-actions>

      </mat-card>



      <mat-card (click)="loadCourse()">
        <img mat-card-image src="assets/img/ms-office.jpg" alt="Microsoft Office">
        <mat-card-content>
          <h1>Microsoft Office Suite</h1>
          <p>
          Master Word, Excel, PowerPoint, and more. Boost your skills for better productivity! Join now.
          </p>
        </mat-card-content>

        <mat-card-actions>
          <div class="price">
            <span class="current">&#8358;25,000.00</span> <span class="divider"> | </span> <span class="old"> &#8358;45,000.00</span>
          </div>
          <div class="duration"> <span class="material-icons">calendar_month</span> 4 Weeks</div>
          <div class="join"><span class="material-icons">arrow_forward</span></div>
        </mat-card-actions>

      </mat-card>


      <mat-card [routerLink]="['/routePath']" routerLinkActive="router-link-active">
        <img mat-card-image src="assets/img/excel.jpg" alt="Microsoft Excel">

        <mat-card-content>
          <h1> Microsoft Excel</h1>
          <p>
          Enhance your proficiency in Microsoft Excel for smarter data analysis and streamlined tasks. Enroll now!
          </p>
        </mat-card-content>

        <mat-card-actions>
          <div class="price">
            <span class="current">&#8358;25,000.00</span> <span class="divider"> | </span> <span class="old"> &#8358;45,000.00</span>
          </div>
          <div class="duration"> <span class="material-icons">calendar_month</span> 4 Weeks</div>
          <div class="join"><span class="material-icons">arrow_forward</span></div>
        </mat-card-actions>

      </mat-card>


      <mat-card [routerLink]="['/routePath']" routerLinkActive="router-link-active">
        <img mat-card-image src="assets/img/pmp.jpg" alt="Project Management">

        <mat-card-content>
          <h1> Project Management Professional (PMP)</h1>
          <p>
          Acquire essential skills and credentials for successful project management. Enroll now to elevate your career!
          </p>
        </mat-card-content>

        <mat-card-actions>
          <div class="price">
            <span class="current">&#8358;25,000.00</span> <span class="divider"> | </span> <span class="old"> &#8358;45,000.00</span>
          </div>
          <div class="duration"> <span class="material-icons">calendar_month</span> 4 Weeks</div>
          <div class="join"><span class="material-icons">arrow_forward</span></div>
        </mat-card-actions>

      </mat-card>


    </section>

    <section id="view-all-courses">
      <a class="view-all" mat-stroked-button routerLink="courses" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">View All Courses
        <mat-icon>double_arrow</mat-icon>
      </a>
    </section>



  `
})
export class IntroCoursesComponent implements OnInit, OnDestroy {
  // init subscriptions list
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
   
  }

  loadCourse() {
    this.router.navigateByUrl('/courses/details');
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
