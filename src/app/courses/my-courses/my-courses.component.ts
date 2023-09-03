import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';
import { CommonModule } from '@angular/common';

/**
 * @title My course component
 */
@Component({
  selector: 'async-my-courses',
  standalone: true,
  imports: [CommonModule, RouterModule,  ],
  template: `
  <!-- show when viewing from inside portal -->
  <section class="breadcrumb-wrapper" [ngClass]="isDarkMode ? 'dark-mode' : ''">
    <div class="breadcrumb">
        <a routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a> &gt;
        <a routerLink="/portal/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Courses</a> &gt;
        <span>My Courses </span>
    </div>
  </section>

    <section [ngClass]="isDarkMode ? 'dark-mode' : ''">


    </section>
  `,
  styleUrls: [`my-courses.light-theme.scss`, `my-courses.dark-theme.scss`]
})
export class MyCoursesComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  isDarkMode: boolean = false;

  constructor(
    private router: Router,
    private themeTogglerService: ThemeTogglerService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      // Subscribe to the action
      this.themeTogglerService.toggleAction$.subscribe((isDarkMode) => {
        // check theme toogle status
        this.isDarkMode = isDarkMode;
        //console.log('Action triggered in nav.', isDarkMode);
      })
    )
  }

  ngOnDestroy(): void {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}