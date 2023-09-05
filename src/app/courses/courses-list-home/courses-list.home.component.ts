import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CourseService } from '../course.service';
import { CourseInterface } from '../course.interface';
import { Subscription } from 'rxjs';
import { LoadingSpinnerComponent } from '../../_common/spinner.compnent';
import { LoadingSpinnerService } from '../../_common/services/loader/spinner.service';

/**
 * @title Main component for course listing
 */
@Component({
  selector: 'async-courses-list-home',
  standalone: true,
  providers: [CourseService],
  imports: [MatButtonModule, LoadingSpinnerComponent, FormsModule, MatInputModule, MatIconModule, MatFormFieldModule, MatCardModule, RouterModule, NgOptimizedImage, CommonModule],
  styleUrls: [`courses-list.light-theme.scss`],
  template: `
  <async-loading-spinner *ngIf="loadingSpinnerService.isShowing()"></async-loading-spinner>


    <div class="courses-list">
      <article>Courses List</article>
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
        <mat-card (click)="loadCourse(course._id)" *ngFor="let course of filteredCourseList; index as i;">
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
    <div class="no-course-found">
        <p>No course found</p>
    </div>
  </ng-template>
   



    <!-- <mat-card (click)="loadCourse()">
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

    </mat-card> -->



    <!-- <mat-card [routerLink]="['/routePath']" routerLinkActive="router-link-active">
      <img mat-card-image src="assets/img/ielts.jpg" alt="Microsoft Excel">

      <mat-card-content>
        <h1> IELTS</h1>
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

    </mat-card> -->



    <!-- <mat-card [routerLink]="['/routePath']" routerLinkActive="router-link-active">
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

    </mat-card> -->



    <!-- <mat-card [routerLink]="['/routePath']" routerLinkActive="router-link-active">
      <img mat-card-image src="assets/img/nodejs.jpg" alt="Project Management">

      <mat-card-content>
        <h1> NodeJS Programming</h1>
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

    </mat-card> -->




    <!-- <mat-card [routerLink]="['/routePath']" routerLinkActive="router-link-active">
      <img mat-card-image src="assets/img/pmp.jpg" alt="Project Management">

      <mat-card-content>
        <h1> Advanced Microsoft Excel</h1>
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

    </mat-card> -->



    <!-- <mat-card [routerLink]="['/routePath']" routerLinkActive="router-link-active">
      <img mat-card-image src="assets/img/uiux.jpg" alt="Web Development">

      <mat-card-content>
        <h1> UI/UX Design</h1>
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

    </mat-card> -->



    <!-- <mat-card [routerLink]="['/routePath']" routerLinkActive="router-link-active">
      <img mat-card-image src="assets/img/javascript.jpg" alt="Web Development">

      <mat-card-content>
        <h1>JavaScript/TypeScript Programming</h1>
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

    </mat-card> -->



  `
})
export class CoursesListHomeComponent implements OnInit {
  subscriptions: Subscription[] = [];
  filterCourse = '';
  courses!: Array<CourseInterface>;
  //isEmptyCourse = true;


    constructor(
      private router: Router,
      private courseService: CourseService,
      public loadingSpinnerService: LoadingSpinnerService,
    ) { }

    get filteredCourseList(): CourseInterface[] {
      return this.courses.filter(course => course.title.toLowerCase().includes(this.filterCourse.toLowerCase()));
    }

    ngOnInit() {
      this.loadingSpinnerService.show();
      
      this.subscriptions.push(
        this.courseService.getCourses().subscribe(courses => {
          if (courses) {
            this.courses = courses;
            //this.isEmptyCourse = false;
            this.loadingSpinnerService.hide()

          }
        })
      )
    }

    loadCourse(id: string) {

      if (this.router.url.includes('portal')) {
        // redirect to the course route on portal 
        this.router.navigate([`/portal/courses/details/${id}`])
      } else {
        // redirect to course route
        this.router.navigate([`/courses/details/${id}`])
      }

    }

    ngOnDestroy() {
      // unsubscribe list
      this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
      });
    }
}
