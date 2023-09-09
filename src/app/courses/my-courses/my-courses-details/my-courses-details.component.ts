import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseInterface } from '../../course.interface';
import { CourseService } from '../../course.service';
import { LoadingSpinnerService } from 'src/app/_common/services/loader/spinner.service';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserInterface, UserService } from 'src/app/_common/services/user.service';
import { Emitters } from 'src/app/_common/emitters/emitters';
import { LoadingSpinnerComponent } from 'src/app/_common/spinner.compnent';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title My courses details page
 */
@Component({
    selector: 'async-my-course-details',
    standalone: true,
    providers: [CourseService],
    imports: [CommonModule, RouterModule, MatCardModule, MatExpansionModule, LoadingSpinnerComponent, MatListModule, MatButtonModule],
    template: `
  <async-loading-spinner *ngIf="loadingSpinnerService.isShowing()"></async-loading-spinner>

    <!-- show when viewing from inside portal -->
    <section class="breadcrumb-wrapper">
        <div class="breadcrumb">
            <a routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a> &gt;
            <a routerLink="/portal/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Courses</a> &gt;
            <a routerLink="/portal/courses/my-courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">My courses</a> &gt;
            <span *ngIf="course.title">{{course.title | titlecase}}</span>
        </div>
    </section>

<div class="course-report">
        <div class="card-container">
            <mat-card>
                <mat-card-content>Course Progress</mat-card-content>
            </mat-card>
            <mat-card>
                <mat-card-content>Course Performance</mat-card-content>
            </mat-card>
            <mat-card>
                <mat-card-content>Course Grade</mat-card-content>
            </mat-card>
        </div>

    
        <!-- <div class="course-title">
            <h2>{{course.title | titlecase}}</h2>
        </div> -->


        <div class="content-container">

            <div class="accordion-container">

                <mat-accordion>
                    <mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)">
                    <mat-expansion-panel-header>
                        <mat-panel-title> {{course.title | titlecase}} </mat-panel-title>
                        <mat-panel-description> Sub title: {{course.subTitle | titlecase}} </mat-panel-description>
                    </mat-expansion-panel-header>
                    <div class="course-details">
                        <h3>Course Details</h3>
                        <mat-list>
                            <mat-list-item>
                                <span matListItemTitle>Course Title</span>
                                <span matListItemLine>{{course.title | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Course Duration</span>
                                <span matListItemLine>{{course.duration | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Course Category</span>
                                <span matListItemLine>{{course.category | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Course Start Date</span>
                                <span matListItemLine>{{course.startDate | date}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Course End Date</span>
                                <span matListItemLine>{{course.endDate | date}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Course Price</span>
                                <span matListItemLine>{{course.currentPrice | currency:"NGN":"&#8358;" }}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Course Certificate</span>
                                <span matListItemLine>{{course.isCerficate ? "Available on demand" : "No available"}}</span>
                            </mat-list-item>

                            <mat-list-item lines="3">
                                <span matListItemTitle>About Course</span>
                                <span [innerHTML]="course.subTitleParagraph"></span>
                            </mat-list-item>
                        </mat-list>
                    </div>

                    <mat-action-row>
                        <button mat-button color="accent" (click)="prevStep()">Previous</button>
                        <button mat-button color="primary" (click)="nextStep()">Next</button>
                    </mat-action-row>
                </mat-expansion-panel>




                <mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)" hideToggle>
                    <mat-expansion-panel-header>
                        <mat-panel-title>
                            Course Progress Report
                        </mat-panel-title>
                        <!-- <mat-panel-description>   </mat-panel-description> -->
                    </mat-expansion-panel-header>


                    <div class="course-details">
                        <h3>Progress Details</h3>
                        <mat-list>
                            <mat-list-item>
                                <span matListItemTitle>Course Completion Percentage</span>
                                <span matListItemLine>{{course.title | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Assessment Completion</span>
                                <span matListItemLine>{{course.duration | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Assignment Submission Status</span>
                                <span matListItemLine>{{course.category | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Time Spent on Course</span>
                                <span matListItemLine>{{course.startDate | date}}</span>
                            </mat-list-item>

                        </mat-list>
                    </div>

                    <mat-action-row>
                        <button mat-button color="accent" (click)="prevStep()">Previous</button>
                        <button mat-button color="primary" (click)="nextStep()">Next</button>
                    </mat-action-row>
                </mat-expansion-panel>




                <mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)">

                    <mat-expansion-panel-header>
                        <mat-panel-title>Course Performance Report</mat-panel-title>
                        <!-- <mat-panel-description> {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description> -->
                    </mat-expansion-panel-header>

                    
                    <div class="course-details">
                        <h3>Performance Details</h3>
                        <mat-list>
                            <mat-list-item>
                                <span matListItemTitle>Assignments and Homework</span>
                                <span matListItemLine>{{course.title | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Participation and Engagement</span>
                                <span matListItemLine>{{course.duration | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Attendance and Punctuality</span>
                                <span matListItemLine>{{course.category | titlecase}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Classroom Behavior and Conduct</span>
                                <span matListItemLine>{{course.startDate | date}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Homework and Practice</span>
                                <span matListItemLine>{{course.endDate | date}}</span>
                            </mat-list-item>
                            <mat-list-item>
                                <span matListItemTitle>Group Projects and Collaboration</span>
                                <span matListItemLine>{{course.currentPrice | currency:"NGN":"&#8358;" }}</span>
                            </mat-list-item>
                        </mat-list>
                    </div>


                    <mat-action-row>
                        <button mat-button color="accent" (click)="prevStep()">Previous</button>
                        <button mat-button color="primary" (click)="nextStep()">End</button>
                    </mat-action-row>
                </mat-expansion-panel>

            </mat-accordion>

            </div>

            <div class="summary-container"> summary content </div>
        </div>

</div>


`,
    styles: [`
  .course-report {
    .card-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 1em;
        mat-card {
            width: 15em;
        }
    }

   /*  .course-title {
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            color: #00838f;
        }
    } */

    .content-container {
        padding: 3em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .accordion-container {
            width: 50%;
            div {
                mat-list {
                    mat-list-item {
                        span[matListItemTitle] {
                            color: #00838f;
                            width: 30em;
                        }
                    }
                }
            } 
        }
        .summary-container {

        }
    }

    
  }
  `],
})
export class MyCoursesDetailsComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];
    id: string = '';
    course!: CourseInterface;
    user!: UserInterface;
    step = 0;

    constructor(
        private router: Router,
        public activatedRoute: ActivatedRoute,
        private courseService: CourseService,
        public loadingSpinnerService: LoadingSpinnerService,
        private userService: UserService,
    ) { }


    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }


    ngOnInit(): void {
        this.loadingSpinnerService.show();

        this.subscriptions.push(
            this.userService.getUser().subscribe(
                res => {
                    this.user = res as UserInterface
                    Emitters.authEmitter.emit(true);

                    this.activatedRoute.params.subscribe((params: Params) => {
                        this.id = params['courseId'];
                        if (this.id) {
                            this.courseService.getCourse(this.id).subscribe(course => {
                                if (course) {
                                    console.log('the course ', course)
                                    this.course = course;
                                    this.loadingSpinnerService.hide()
                                }
                            })
                        }
                    })

                },
                (error) => {
                    console.log(error)
                    Emitters.authEmitter.emit(false);
                    // redirect to home page
                    this.router.navigate(['/'])
                    this.loadingSpinnerService.hide()
                }
            )
        )
    }

    ngOnDestroy(): void {
        // unsubscribe list
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
}