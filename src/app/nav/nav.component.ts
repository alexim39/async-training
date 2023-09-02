import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LogoComponent } from '../_common/logo.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
// declare jquery as any
declare const $: any;
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationBannerComponent } from './notification-banner/notification-banner.component';
import { Emitters } from '../_common/emitters/emitters';
import { HttpClientModule } from '@angular/common/http';
import { AuthApiService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { BreadcrumbComponent } from '../_common/breadcrumb.component';


@Component({
  selector: 'async-nav',
  standalone: true,
  providers: [AuthApiService],
  imports: [MatToolbarModule, BreadcrumbComponent, MatDialogModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, LogoComponent, CommonModule, MatMenuModule, NotificationBannerComponent, HttpClientModule],
  template: `

  <!-- THIS IS A TEMPORARY NOTIFICATION BANNER - FOR TRAILING TRAINING -->
  <async-notification-banner></async-notification-banner>


   <mat-toolbar [ngClass]="status ? 'dark-mode' : ''">
    <mat-toolbar-row>

    <span class="logo"><async-logo></async-logo></span>

    <span class="spacer"></span>

    <a class="view-on-desktop" mat-button routerLink="about-async-training" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">About Us</a>
    <a class="view-on-desktop" mat-button routerLink="courses" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}" *ngIf="!authenticated">Courses</a>

    <!-- <a mat-button [matMenuTriggerFor]="menu">Course<span class="material-icons">expand_more</span> </a> -->

    <!-- <mat-icon class="cart" (click)="addToCart()" >shopping_cart</mat-icon> -->
    <span matTooltip="Join Whatsapp group" (click)="lunchWhatsAppGroup()" class="fa fa-whatsapp"></span>
    <!-- <i matTooltip="Togle light and dark mode" class="fa fa-moon-o" (click)="darkMode()"></i> -->

    <button class="view-on-desktop" mat-stroked-button (click)="openAuthComponent()" *ngIf="!authenticated">Login</button>
    <button class="view-on-desktop" mat-stroked-button (click)="signOut()" *ngIf="authenticated">Log out</button>
    <button class="view-on-desktop" mat-flat-button color="accent" routerLink="courses" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}" *ngIf="!authenticated">Get Started</button>

      <i class="fa fa-bars" (click)="toggleMobileNav()" id="toggle"></i>

    </mat-toolbar-row>



    <mat-toolbar-row class="mobile-nav" id="mobile-nav" *ngIf="showMobileNave">
      <a mat-button routerLink="about-async-training">About Us</a>
      <a mat-button routerLink="courses" *ngIf="!authenticated">Courses</a>
      
      <span class="spacer"></span>

      <button mat-stroked-button (click)="openAuthComponent()" *ngIf="!authenticated">Login</button>
      <button mat-stroked-button (click)="signOut()" *ngIf="authenticated">Log out</button>
    </mat-toolbar-row>


   </mat-toolbar>

   <!-- <async-breadcrumb></async-breadcrumb> -->


<!--     <mat-menu #menu="matMenu">
      <a mat-menu-item>Item 1</a>
      <a mat-menu-item>Item 2</a>
    </mat-menu> -->
  `,
  styles: [`
  .dark-mode {
    background: black;
    color: white;
  }

mat-toolbar {
  position: sticky;
  position: -webkit-sticky; /* For macOS/iOS Safari */
  top: 0;
  z-index: 1000;

  .logo {
    padding-left: 2em;
  }

  .spacer {
    flex: 1 1 auto;
  }

  a {
    color: #00838F;
  }

  mat-icon {
    cursor: pointer;
    color: #28D146;
  }

  button {
    margin-left: 2em;
  }

  .cart {
    margin: 0 1em;
    color: #00838F;
  }

  .fa-whatsapp {
    color: #075E54;
    font-size: 1.2em;
    cursor:pointer;
    margin-left: 1em;
  }

  .fa-moon-o {
    margin-left: 1em;
  }

}

/* hide on mible */
.mobile-nav {
    display: none;
}

.fa-bars {
    display: none;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .logo {
    padding-left: 0;
    margin-left: -2em;
  }

  .mobile-nav {
    display: flex;

  }

  .fa-bars {
    display: block;
  }

  .fa-whatsapp {
    margin: 0 1em;
  }

  .view-on-desktop {
    display: none;
  }
}


`]
})
export class NavComponent implements OnInit, OnDestroy {
  // init subscriptions list
  subscriptions: Subscription[] = [];

  status: boolean = false;
  showMobileNave = false;

  authenticated = false;

  constructor(
    public dialog: MatDialog,
    private authAPI: AuthApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    // listern to auth event emitter to check if user is signed in or not
    this.subscriptions.push(
      Emitters.authEmitter.subscribe(
        (auth: boolean) => {
          this.authenticated = auth;
        }
      )
    )
  }

  signOut(): void {

    this.subscriptions.push(
      this.authAPI.signOut({}).subscribe(res => {
        this.authenticated = false;
        // redirect to login page
        this.router.navigate(['/'])
      })
    )


  }

  openAuthComponent() {
    this.dialog.open(AuthComponent);
  }

  toggleMobileNav() {
    this.showMobileNave = !this.showMobileNave;
  }

  darkMode() {
    this.status = !this.status;
  }

  lunchWhatsAppGroup() {
    window.open('https://chat.whatsapp.com/JGcvWWYcQWJ4bAADdRnp1A', '_blank');
  }



  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
