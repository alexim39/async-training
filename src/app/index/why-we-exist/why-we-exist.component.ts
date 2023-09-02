import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../../auth/auth.component';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-index-why-we-exist',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule,  MatFormFieldModule, MatInputModule, CommonModule],
  template: `
    <aside [ngClass]="isDarkMode ? 'dark-mode' : ''">
      <div>
        <span>Book Your Slot for Remote Coaching</span>
        <span>We Help You Climb Your Career Ladder Like A Pro</span>
        <!-- <span> Bet Investment</span> -->
      </div>


      <h1>We believe you can grow your career through a gradual process of learning and we only exist because we want you to thrive</h1>

      <small>Use our flexible learning path, adjust your learning to suit your time  — all in one place. Open a free account in minutes and learn any time.</small>

      <button (click)="openAuthComponent()" mat-flat-button color="accent" routerLink="courses" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">JOIN NOW</button>
    </aside>
  `,
  styleUrls: ['why-we-exist.light-theme.scss', 'why-we-exist.dark-theme.scss'],
})
export class WhyWeExistComponent implements OnInit{
  // init subscriptions list
  subscriptions: Subscription[] = [];
  isDarkMode: boolean = false;

  constructor(
    public dialog: MatDialog,
    private themeTogglerService: ThemeTogglerService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      // Subscribe to the action
      this.themeTogglerService.toggleAction$.subscribe((isDarkMode) => {
        // check theme toogle status
        this.isDarkMode = isDarkMode;
        //console.log('Action triggered in TestimonialComponent.', isDarkMode);
      })
    )
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
