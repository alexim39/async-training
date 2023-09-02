import { Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { CourseInterface } from '../../course.interface';
import { PaystackService } from 'src/app/_common/services/paystack.service';
import { Subscription } from 'rxjs';
import { Emitters } from 'src/app/_common/emitters/emitters';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/auth/auth.component';
import { UserInterface, UserService } from 'src/app/_common/services/user.service';

@Component({
  selector: 'async-banner-price',
  standalone: true,
  providers: [PaystackService, UserService],
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, CommonModule],
  template: `

    <article class="price">
      <p><span class="current">{{course.currentPrice | currency:"NGN":"&#8358;" }}</span> <span class="divider"> </span> <em *ngIf="removeOldPrice"> | </em> <span class="old" *ngIf="removeOldPrice"> {{course.oldPrice | currency:"NGN":"&#8358;" }}</span></p>
      <small [innerHTML]="course.panelMsg"></small>

      <hr>

      <a mat-flat-button color="primary" (click)="initiatePayment()">Join Now</a>
      <!-- <button *ngIf="!isAddedToCard" mat-stroked-button color="primary" (click)="gotoCart()">Go to Cart</button> -->
    </article>

  `,
  styles: [`
    .price {
        background: none;
        width: inherit;
        text-align: center;
        .current {
          font-size: 1.5em;
          font-weight: bold;
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
        small {
          font-size: 0.8em;
          margin: 0 2em;
          color: gray;
        }
        hr {
          margin: 1em;
        }
        a {
          width: 300px;
        }
      }
  `]
})
export class BannerPriceComponent implements OnInit {
  //window.open('https://paystack.com/pay/async-training');
  authenticated = false;
  subscriptions: Subscription[] = [];
  @Input() course!: CourseInterface
  removeOldPrice = true;
  user!: UserInterface;
  
  constructor(
    private router: Router,
    private paystackService: PaystackService,
    public dialog: MatDialog,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    if (this.course.currentPrice == this.course.oldPrice) this.removeOldPrice = false

   /*  // listern to auth event emitter to check if user is signed in or not
    this.subscriptions.push(
      Emitters.authEmitter.subscribe(
        (auth: boolean) => {
          this.authenticated = auth;
          console.log('aut ',this.authenticated)
        }
      )
    ) */

    this.subscriptions.push(
      this.userService.getUser().subscribe(
        res => {
          this.user = res as UserInterface
          //Emitters.authEmitter.emit(true);
          this.authenticated = true;
        },
        error => {
          //Emitters.authEmitter.emit(false);
          this.authenticated = false;
        }
      )
    )

  }

  initiatePayment(): void {
    // check if authenticated
    if (!this.authenticated) {
      this.openAuthComponent();
    } else {

       // Replace with user's email and payment amount
       const email = this.user.email;
       const amount = this.course.currentPrice; // 1000 NGN
 
       this.subscriptions.push(
         this.paystackService.initiatePayment(amount, email).subscribe(response => {
           // Handle the response from Paystack, which may include a redirect URL for payment
           window.open(response.data.authorization_url, "_blank");
         // window.location.href = response.data.authorization_url;
 
         })
       )
    }
   
  }

  openAuthComponent() {
    this.dialog.open(AuthComponent);
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
