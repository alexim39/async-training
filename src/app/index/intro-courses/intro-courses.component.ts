import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';

@Component({
  selector: 'async-index-intro-courses',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, NgOptimizedImage, MatIconModule, CommonModule],
  styleUrls: ['intro-courses.light-theme.scss', 'intro-courses.dark-theme.scss'],
  template: `
    <section [ngClass]="isDarkMode ? 'dark-mode' : ''">

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

    <section class="view-all-courses" [ngClass]="isDarkMode ? 'dark-mode' : ''">
      <a mat-stroked-button routerLink="courses" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">View All Courses
        <mat-icon>double_arrow</mat-icon>
      </a>
    </section>



  `
})
export class IntroCoursesComponent implements OnInit, OnDestroy {
  // init subscriptions list
  subscriptions: Subscription[] = [];
  isDarkMode: boolean = false;

  constructor(
    private router: Router,
    private themeTogglerService: ThemeTogglerService
    ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      // Subscribe to the action
      this.themeTogglerService.toggleAction$.subscribe((isDarkMode) => {
        // check theme toogle status
        this.isDarkMode = isDarkMode;
        //console.log('Action triggered in nav.', isDarkMode);
      })
    )
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
