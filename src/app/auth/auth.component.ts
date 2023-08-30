import { Component, OnInit, OnDestroy } from '@angular/core';
// declare jquery as any
declare const $: any;
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SigninDialogComponent } from './signin-dialog/signin-dialog.component';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';


@Component({
  selector: 'async-auth',
  standalone: true,
  imports: [MatToolbarModule, SigninDialogComponent, SignupDialogComponent, RouterModule, MatIconModule, MatButtonModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  // init subscriptions list
  subscriptions: Subscription[] = [];
  toggle: boolean = false;

  constructor() {}

  ngOnInit(): void {

    // jquery ready
    $(document).ready(() => {
      $('#signUp').click(() => {
        $('.container').addClass("right-panel-active");
      })

      $('#signIn').click(() => {
        $('.container').removeClass("right-panel-active");
      })
    })
  }

  toggleAuth() {
    this.toggle = !this.toggle;
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}
