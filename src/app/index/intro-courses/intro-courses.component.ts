import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-index-intro-courses',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, NgOptimizedImage, MatIconModule, CommonModule],
  styles: [`
    section {
      background: #eee;
      display: flex;
      flex-direction: row;
      padding: 1em;
      text-decoration: none;
      color: black;
      flex-wrap: wrap;

      mat-card {
        width: 20em;
        margin: 1em 1em 0 0;
        cursor: pointer;
        flex-grow: 1;
        flex-basis: 150px;
          img {
            width: auto;
            height: 20em;
          }
          mat-card-content {
            font-family: cursive;
            font-size: 0.8em;
            height: 10em;
          }
          mat-card-actions {

            display: flex;
            justify-content: space-evenly;
            padding-right: 2em;
            margin: 0;
            padding: 0;

            .price {
              font-size: 0.7em;
              .current {

                font-family: "Open Sans", sans;
                color: #00838F;
              }
              .divider {
                color: #aaa;
              }
              .old {
                color: #aaa;
                text-decoration: line-through
              }
            }

            .duration {
              font-size: 0.7em;
              .material-icons {
                font-size: 0.9em;
              }
            }

            .join {
              span {
                border: 1px solid #00838F;
                border-radius: 50%;
                color: #00838F;
              }
            }

          }
      }
    }

    .view-all-courses {
      justify-content: center;
    }

  `],
  template: `
    <section>

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

    <section class="view-all-courses">
      <a mat-stroked-button routerLink="courses" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">View All Courses
        <mat-icon>double_arrow</mat-icon>
      </a>
    </section>



  `
})
export class IntroCoursesComponent {

  constructor(private router: Router) { }

  loadCourse() {
    this.router.navigateByUrl('/courses/details');
  }
}
