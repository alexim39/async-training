import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CourseInterface } from '../../course.interface';
import { Subscription } from 'rxjs';
import { PaystackService } from 'src/app/_common/services/paystack.service';
import { UserInterface } from 'src/app/_common/services/user.service';

/**
 * @title Course Summary page
 */
@Component({
  selector: 'async-my-courses-summary',
  standalone: true,
  providers: [PaystackService],
  imports: [MatListModule, MatDividerModule],
  template: `
    <div class="summary">
        <h3>Program Summary</h3>

        <mat-list>
            <mat-list-item>Course Timing: <span>{{daysRemaining}}</span></mat-list-item>
            <mat-divider></mat-divider>

            <mat-list-item>Course Fee: <span>{{isCoursePaidFor ? "Paid":"Not paid"}}</span></mat-list-item>
            <mat-divider></mat-divider>

           <!--  <mat-list-item>Item 3</mat-list-item>
            <mat-divider></mat-divider> -->

        </mat-list>
    </div>

  `,
  styles: [`
  .summary {
    margin-top: -1em;
    h3 {
        background-color: #00838f;
        height: 1em;
        width: 100%;
        padding: 1em;
        color: white;
        font-family: "Open Sans", sans;
    }
    
  }
  `]
})
export class MyCoursesSummaryComponent implements OnInit, OnDestroy {
    @Input() course!: CourseInterface;
    @Input() user!: UserInterface;
    endDate!: Date; // Initialize this with the end date of the program
    daysRemaining!: number | string;
    subscriptions: Subscription[] = [];
    isCoursePaidFor = false;

    constructor(
        private paystackService: PaystackService,
    ) { }

    ngOnInit(): void {
        
        // Set the end date of the program (you can load this from an API or a user input)
        this.endDate = new Date(this.course.endDate); // Replace with your program's end date
        this.calculateDaysRemaining();

        // check if user has paid for course
        this.subscriptions.push(
             // Subscribe to check if user has already paid for course
             this.paystackService.getPaymentRecords(this.user._id, this.course._id).subscribe((res) => {
                // disable payment button
                if (res.status == "success") {
                  this.isCoursePaidFor = true;
                } else {
                  this.isCoursePaidFor = false;
                }
              })
        )
    }

    private calculateDaysRemaining() {
        const today = new Date();
        const timeDifference = this.endDate.getTime() - today.getTime();
        const daysRemaining= Math.ceil(timeDifference / (1000 * 3600 * 24));

        if (daysRemaining === 0) {
            this.daysRemaining = "Course is ending today"
        } else if (daysRemaining < 0) {
            this.daysRemaining = "Course have ended"
        } else if (daysRemaining === 1) {
            this.daysRemaining = daysRemaining + 'day left';
        } else {
            this.daysRemaining = daysRemaining + 'days left';
        }

    }

    ngOnDestroy() {
        // unsubscribe list
        this.subscriptions.forEach(subscription => {
          subscription.unsubscribe();
        });
      }
}