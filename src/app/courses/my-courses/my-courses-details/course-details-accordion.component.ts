import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserInterface } from 'src/app/_common/services/user.service';
import { Subscription } from 'rxjs';
import { CourseInterface } from '../../course.interface';


/**
 * @title Testing with MatBadgeHarness
 */
@Component({
  selector: 'async-course-details-accordion',
  standalone: true,
  imports: [CommonModule, RouterModule,  MatExpansionModule, MatListModule, MatButtonModule],
  template: `
    <div class="accordion">

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
                        <span matListItemTitle>Course Fee</span>
                        <span matListItemLine>{{course.currentPrice | currency:"NGN":"&#8358;" }}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Course Certificate</span>
                        <span matListItemLine>{{course.isCerficate ? "Available on demand" : "Not available"}}</span>
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
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Assessment Completion</span>
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Assignment Submission Status</span>
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Time Spent on Course</span>
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
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
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Participation and Engagement</span>
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Attendance and Punctuality</span>
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Classroom Behavior and Conduct</span>
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Homework and Practice</span>
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
                    </mat-list-item>
                    <mat-list-item>
                        <span matListItemTitle>Group Projects and Collaboration</span>
                        <span matListItemLine>{{null ? "" : "0%"}}</span>
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
  `,
  styles: [`
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
  `]
})
export class CourseDetailsAccordionComponent {
    subscriptions: Subscription[] = [];
    @Input() course!: CourseInterface;
    @Input() user!: UserInterface;
    step = 0;

    constructor(
        private router: Router,
        public activatedRoute: ActivatedRoute,
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
    }

    ngOnDestroy(): void {
        // unsubscribe list
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
}