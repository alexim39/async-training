import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonModule } from '@angular/common';

/**
 * @title My course component
 */
@Component({
  selector: 'async-settings',
  standalone: true,
  imports: [CommonModule, RouterModule,  ],
  template: `
  <!-- show when viewing from inside portal -->
  <section class="breadcrumb-wrapper">
    <div class="breadcrumb">
        <a routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Dashboard</a> &gt;
        <!-- <a routerLink="/portal/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Courses</a> &gt; -->
        <span>Settings </span>
    </div>
  </section>

    <section>


    </section>
  `,
  styleUrls: [`settings.component.scss`]
})
export class SettingsComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}