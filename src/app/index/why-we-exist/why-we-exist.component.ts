import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../../auth/auth.component';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-index-why-we-exist',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule,  MatFormFieldModule, MatInputModule, CommonModule],
  template: `
    <aside class="why-we-exist">
      <div>
        <span>Book Your Slot for Remote Coaching</span>
        <span>We Help You Climb Your Career Ladder Like A Pro</span>
        <!-- <span> Bet Investment</span> -->
      </div>


      <h1>We believe you can grow your career through a gradual process of learning and we only exist because we want you to thrive</h1>

      <small>Use our flexible learning path, adjust your learning to suit your time  — all in one place. Open a free account in minutes and learn any time.</small>

      <button (click)="openAuthComponent()" mat-flat-button color="accent">JOIN NOW</button>
    </aside>
  `,
  styleUrls: ['why-we-exist.component.scss'],
})
export class WhyWeExistComponent implements OnInit{
  // init subscriptions list
  subscriptions: Subscription[] = [];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {  }


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
