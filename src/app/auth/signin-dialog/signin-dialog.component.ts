import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthComponent } from '../auth.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthApiService } from '../auth.service';
import { AsyncFormErrorStateMatcher } from 'src/app/_common/formErrorChecker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'async-signin',
  styleUrls: ['./signin-dialog.component.scss'],
  standalone: true,
  providers: [ AuthApiService ],
  imports: [RouterModule, MatIconModule, MatButtonModule, CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatProgressBarModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSignIn(form.value)">
      <h1>Sign in</h1>
      <span>Use your email to sign in</span>

      <mat-form-field appearance="outline">
          <mat-label>Email address</mat-label>
          <input matInput type="email" formControlName="email" [errorStateMatcher]="matcher">
          <mat-error *ngIf="form.get('email')?.hasError('email') && !form.get('email')?.hasError('required')">
            Please enter a valid email address
          </mat-error>
          <mat-error *ngIf="form.get('email')?.hasError('required')">
              Your email is required
          </mat-error>
      </mat-form-field>

      <mat-form-field appearance="outline">
          <mat-label>Password</mat-label>
          <input matInput [type]="signIn_hide ? 'password' : 'text'" formControlName="password" [errorStateMatcher]="matcher">
          <div mat-icon-button matSuffix (click)="signIn_hide = !signIn_hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="signIn_hide">
              <mat-icon>{{signIn_hide ? 'visibility_off' : 'visibility'}}</mat-icon>
          </div>
          <mat-error *ngIf=" form.get('password')?.hasError('pattern')">
              Password should be minimum of 8 characters
          </mat-error>
          <mat-error *ngIf=" form.get('password')?.hasError('required')">
              Your password is required
          </mat-error>
      </mat-form-field>

      <button [disabled]="form.invalid || isSpinning" mat-flat-button color="accent">
          <div class="loader" *ngIf="isSpinning"></div>
          SIGN IN
      </button>

      <a (click)="closeDialog()" [routerLink]="['/fp']">Forgot your password?</a>

      <mat-progress-bar color="accent" mode="indeterminate" *ngIf="isSpinning"></mat-progress-bar>
    </form>
  `
})
export class SigninDialogComponent implements OnInit, OnDestroy {

  signIn_hide = true;
  //currentUser: UserInterface;
  subscriptions: Subscription[] = [];
  form!: FormGroup;
  isSpinning: boolean = false;

  matcher = new AsyncFormErrorStateMatcher();


  constructor(
    private thisDialogRef: MatDialogRef<AuthComponent>,
    private router: Router,
    private authAPI: AuthApiService,
  ) { }


  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl('', {
        validators:
          [
            Validators.required,
            Validators.email
          ], updateOn: 'change'
      }),
      password: new FormControl('', {
        validators:
          [
            Validators.required,
            Validators.pattern('[A-Za-z0-9!@#$%^&*()-_=+?/.>,<;:]{8,80}') // min of 8 any character lower/upper case with optionally any of attached special character or digit and mix of 80
          ], updateOn: 'change'
      })
    })
  }

  onSignIn(formObject: { email: string, password: string }): void {
    this.isSpinning = true;

    this.subscriptions.push(

      this.authAPI.signIn(formObject).subscribe(res => {
        
        this.closeDialog();
        this.isSpinning = false;
        this.router.navigate(['/portal']);
      }, error => {
        this.isSpinning = false;
        if (error.code == 404) {// user not found
          Swal.fire({
            position: 'bottom',
            icon: 'warning',
            text: 'This email does not exist in our platform',
            showConfirmButton: false,
            timer: 4000
          });
        }
        if (error.code == 400) {// invalid credentail
          Swal.fire({
            position: 'bottom',
            icon: 'warning',
            text: 'Please check your account password and try again',
            showConfirmButton: false,
            timer: 4000
          });
        }
      })
    )
  }


  closeDialog(): void {
    // close dialog
    this.thisDialogRef.close()
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}


