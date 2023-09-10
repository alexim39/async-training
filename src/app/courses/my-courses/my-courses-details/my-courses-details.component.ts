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
import { MatButtonModule } from '@angular/material/button';
import { CourseDetailsAccordionComponent } from './course-details-accordion.component';
import { MyCoursesDetailsCardsComponent } from '../my-courses-details-cards.component';
import { MyCoursesSummaryComponent } from './my-courses-details-summary.component';

/**
 * @title My courses details page
 */
@Component({
    selector: 'async-my-course-details',
    standalone: true,
    providers: [CourseService],
    imports: [CommonModule, RouterModule, MyCoursesDetailsCardsComponent, MatExpansionModule, MyCoursesSummaryComponent, LoadingSpinnerComponent, MatListModule, MatButtonModule, CourseDetailsAccordionComponent],
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
        <div class="cards">
            <async-my-courses-details-card></async-my-courses-details-card>
        </div>


        <div class="contents">

            <div class="accordion">
                <async-course-details-accordion [course]="course" [user]="user"></async-course-details-accordion>
            </div>

            <div class="summary"> 
                <async-my-courses-summary [course]="course" [user]="user"></async-my-courses-summary>
            </div>
        </div>

</div>


`,
    styles: [`
  .course-report {
   
    .contents {
        padding: 3em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1em;
        .accordion {
            width: 50%;
        }
        .summary {
            width: 50%;
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

                    this.activatedRoute.params.subscribe((params: Params) => {
                        this.id = params['courseId'];
                        if (this.id) {
                            this.courseService.getCourse(this.id).subscribe(course => {
                                if (course) {
                                    //console.log('the course ', course)
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