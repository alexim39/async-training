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

/**
 * @title My courses details page
 */
@Component({
    selector: 'async-my-course-details',
    standalone: true,
    providers: [CourseService],
    imports: [CommonModule, RouterModule, MatCardModule, MatExpansionModule, LoadingSpinnerComponent, MatListModule],
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

    
        <div class="course-title">
            <h2>{{course.title | titlecase}}</h2>
        </div>


        <div class="accordion-container">

            <mat-accordion>
                <mat-expansion-panel>
                <mat-expansion-panel-header>
                    <mat-panel-title> {{course.title | titlecase}} </mat-panel-title>
                    <mat-panel-description> Sub title: {{course.subTitle | titlecase}} </mat-panel-description>
                </mat-expansion-panel-header>
                <div>
                    <h3>Course Details</h3>
                    <mat-list>
                        <mat-list-item>
                            <span matListItemTitle>Course Title</span>
                            <span matListItemLine>{{course.title | titlecase}}</span>
                        </mat-list-item>
                        <mat-list-item>
                            <span matListItemTitle>Course Duration</span>
                            <span>{{course.duration | titlecase}}</span>
                        </mat-list-item>
                        <mat-list-item>
                            <span matListItemTitle>Course Category</span>
                            {{course.category | titlecase}}
                        </mat-list-item>
                        <mat-list-item>
                            <span matListItemTitle>Course Start Date</span>
                            {{course.startDate | date}}
                        </mat-list-item>
                        <mat-list-item>
                            <span matListItemTitle>Course End Date</span>
                            {{course.endDate | date}}
                        </mat-list-item>
                        <mat-list-item>
                            <span matListItemTitle>Course Price</span>
                            {{course.currentPrice | currency:"NGN":"&#8358;" }}
                        </mat-list-item>
                        <mat-list-item>
                            <span matListItemTitle>Course Certificate</span>
                            {{course.isCerficate ? "Available on demand" : "No available"}}
                        </mat-list-item>
                    </mat-list>
                </div>
            </mat-expansion-panel>

            <!-- <mat-expansion-panel (opened)="panelOpenState = true" (closed)="panelOpenState = false">

                <mat-expansion-panel-header>
                    <mat-panel-title>
                        Self aware panel
                    </mat-panel-title>
                    <mat-panel-description>
                        Currently I am {{panelOpenState ? 'open' : 'closed'}}
                    </mat-panel-description>
                </mat-expansion-panel-header>

                <p>I'm visible because I am open</p>
            </mat-expansion-panel> -->

        </mat-accordion>


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

    .course-title {
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            color: #00838f;
        }
    }

    .accordion-container {
        padding: 3em;
    }
  }
  `],
})
export class MyCoursesDetailsComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = [];
    id: string = '';
    course!: CourseInterface;
    user!: UserInterface;

    panelOpenState = false;

    constructor(
        private router: Router,
        public activatedRoute: ActivatedRoute,
        private courseService: CourseService,
        public loadingSpinnerService: LoadingSpinnerService,
        private userService: UserService,
    ) { }


    ngOnInit(): void {
        this.loadingSpinnerService.show();

        this.subscriptions.push(
            this.userService.getUser().subscribe(
                res => {
                    this.user = res as UserInterface
                    Emitters.authEmitter.emit(true);
                    console.log('the user ', this.user)

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