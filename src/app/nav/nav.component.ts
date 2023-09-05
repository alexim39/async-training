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
import { LoadingSpinnerService } from '../_common/services/loader/spinner.service';
import { LoadingSpinnerComponent } from '../_common/spinner.compnent';
import { ThemeTogglerService } from '../_common/services/theme-toggler.service';


@Component({
  selector: 'async-nav',
  standalone: true,
  providers: [AuthApiService],
  imports: [MatToolbarModule, BreadcrumbComponent, LoadingSpinnerComponent, MatDialogModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, LogoComponent, CommonModule, MatMenuModule, NotificationBannerComponent, HttpClientModule],
  template: `
  <async-loading-spinner *ngIf="loadingSpinnerService.isShowing()"></async-loading-spinner>
  <!-- THIS IS A TEMPORARY NOTIFICATION BANNER - FOR TRAILING TRAINING -->
  <async-notification-banner></async-notification-banner>


   <mat-toolbar class="nav">
    <mat-toolbar-row>

    <span class="logo"><async-logo></async-logo></span>

    <span class="spacer"></span>

    <a class="view-on-desktop" mat-button routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngIf="authenticated">Dashboard</a>
    <a class="view-on-desktop" mat-button routerLink="about-async-training" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">About Us</a>
    <a class="view-on-desktop" mat-button routerLink="courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngIf="!authenticated">Courses</a>

    <!-- <a mat-button [matMenuTriggerFor]="menu">Course<span class="material-icons">expand_more</span> </a> -->

    <!-- <mat-icon class="cart" (click)="addToCart()" >shopping_cart</mat-icon> -->
    <span matTooltip="Join Whatsapp group" (click)="lunchWhatsAppGroup()" class="fa fa-whatsapp"></span>

    

    <button class="view-on-desktop" mat-stroked-button (click)="openAuthComponent()" *ngIf="!authenticated">Login</button>
    <button class="view-on-desktop" mat-stroked-button (click)="signOut()" *ngIf="authenticated">Log out</button>
    <button class="view-on-desktop" mat-flat-button color="accent" routerLink="courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngIf="!authenticated">Get Started</button>

    <!-- light and dark theme toggle -->
    <i matTooltip="Toggle light to dark mode" class="fa fa-moon-o" (click)="toggleTheme()" *ngIf="!isDarkMode"></i>
    <i matTooltip="Toggle dark to light mode" class="fa fa-sun-o" (click)="toggleTheme()" *ngIf="isDarkMode"></i>

      <i class="fa fa-bars" (click)="toggleMobileNav()" id="toggle"></i>

    </mat-toolbar-row>



    <mat-toolbar-row class="mobile-nav" id="mobile-nav" *ngIf="showMobileNav">
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
  styleUrls: [`nav.light-theme.scss`]
})
export class NavComponent implements OnInit, OnDestroy {
  // init subscriptions list
  subscriptions: Subscription[] = [];

  isDarkMode: boolean = false;
  showMobileNav = false;

  authenticated = false;

  constructor(
    public dialog: MatDialog,
    private authAPI: AuthApiService,
    private router: Router,
    private themeTogglerService: ThemeTogglerService,
    public loadingSpinnerService: LoadingSpinnerService
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

    const currentTheme = this.themeTogglerService.getTheme();
    this.themeTogglerService.setTheme(currentTheme);
  }

  signOut(): void {
    this.loadingSpinnerService.show();

    this.subscriptions.push(
      this.authAPI.signOut({}).subscribe(res => {
        this.authenticated = false;
        this.loadingSpinnerService.hide()
        // redirect to login page
        this.router.navigate(['/'])
      })
    )
  }

  openAuthComponent() {
    this.dialog.open(AuthComponent);
  }

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }

  toggleTheme() {
    const currentTheme = this.themeTogglerService.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // toggle icon
    if (newTheme === 'dark') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
    this.themeTogglerService.setTheme(newTheme);
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
