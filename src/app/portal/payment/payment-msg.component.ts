import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoadingSpinnerService } from 'src/app/_common/services/loader/spinner.service';
import { LoadingSpinnerComponent } from 'src/app/_common/spinner.compnent';
import { Subscription } from 'rxjs';
import { PaystackService } from 'src/app/_common/services/paystack.service';
import { PaymentUpdaterService } from './payment-updater.service';

/**
 * @title Tab group with aligned labels
 */
@Component({
  selector: 'async-payment-msg',
  standalone: true,
  providers: [PaystackService, PaymentUpdaterService],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, LoadingSpinnerComponent],
  template: `
  <async-loading-spinner *ngIf="loadingSpinnerService.isShowing()"></async-loading-spinner>

   <!-- show when viewing from inside portal -->
   <section class="breadcrumb-wrapper">
    <div class="breadcrumb">
            <a routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a> &gt;
            <a routerLink="/portal/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Courses</a> &gt;
            <span>Course payment</span>
        </div>
   </section>
   

    <section class="payment">

        <div class="payment-img">
            <!-- <h1 class="text-center">404</h1> -->
            <img src="assets/img/cash-payment.svg" alt="Payment image">
        </div>

        <div class="payment-msg">
            <h3>Your Payment is {{paymentMsg}}</h3>
            <p>Thank you for your payment. An automated transaction receipt will be sent to your registered email</p>
            <button  mat-flat-button color="accent" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}" (click)="gotoCourse()">Go to Course</button>
        </div>

    </section>
  `,
  styles: [`
  .payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    .payment-img {
        img {
            width: 100%;
        }
    }
    .payment-msg {
        text-align: center;
        h3 {
            font-family: Cursive
        }
        p {
            color: gray;
        }
    }
  }
  `],
})
export class PaymentMsgComponent implements OnInit {
    subscriptions: Subscription[] = [];
    courseId: string | undefined;
    reference: string | undefined;
    userId: string | undefined;
    paymentMsg = '';
    

    constructor(
        private router: Router,
        public loadingSpinnerService: LoadingSpinnerService,
        private activatedRoute: ActivatedRoute,
        private paystackService: PaystackService,
        private paymentUpdaterService: PaymentUpdaterService
    ) { }

    ngOnInit(): void {
        this.loadingSpinnerService.show();

        this.courseId = this.activatedRoute.snapshot.queryParamMap.get('courseId')?.toString();
        this.reference = this.activatedRoute.snapshot.queryParamMap.get('reference')?.toString();
        this.userId = this.activatedRoute.snapshot.queryParamMap.get('userId')?.toString();
        if (this.courseId && this.reference && this.userId) {

            this.subscriptions.push(
                this.paystackService.getReferencesFromPaystack(this.reference).subscribe(response => {
                    //console.log('paystack response -',response)
                    if (response.data.status === 'success') {
                        // Payment is successful

                        // You can update your database or perform any necessary actions here
                        this.paystackService.setUserPayment({reference: this.reference, user: this.userId, course: this.courseId, status: 'success'}).subscribe(response => {
                            if (response.status === "success") {
                                // disable payment button
                                // Trigger the action in the shared service
                                this.updatePaymentElement();
                            }
                        })
                        this.paymentMsg = 'Successful';
                      } else {
                        // Payment failed

                         // You can update your database or perform any necessary actions here
                         this.paystackService.setUserPayment({reference: this.reference, user: this.userId, course: this.courseId, status: 'fail'}).subscribe(response => {
                            // disable payment button
                            // Trigger the action in the shared service
                            this.paymentUpdaterService.triggerAction(false);
                        })
                        this.paymentMsg = ' not Successful';
                      }

                      this.loadingSpinnerService.hide()
                })
            )
        }
    }
  
    gotoCourse(): void {
        this.router.navigate([`/portal/courses/my-courses/details/${this.courseId}`])
    }

    private updatePaymentElement() {
        this.paymentUpdaterService.triggerAction(true);
    }
}