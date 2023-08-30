import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../../auth/auth.component';

@Component({
  selector: 'async-index-why-we-exist',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule,  MatFormFieldModule, MatInputModule],
  template: `
    <aside>
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
  styles: [`
  aside {
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      margin: 0 1em 0 1em;
      display: flex;
      flex-direction: row;
      span {
        margin-left: 1em;
        color: #AD1457;
        font-family: Verdana;
        display: list-item;
        list-style-type: disc;
        list-style-position: inside;
      }
    }
    h1 {
      font-weight: bolder;
      text-align: justify;
      margin: 1em;
    }
    small {
      text-align: justify;
      margin: 0 1em;
    }
    button {
      margin-top: 2em;
    }
  }
`],
})
export class WhyWeExistComponent {

  constructor(
    public dialog: MatDialog
  ) { }


  openAuthComponent() {
    this.dialog.open(AuthComponent);
  }

}
