import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Emitters } from '../_common/emitters/emitters';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortalSidenavComponent } from './portal.sidenav.component';
import { UserInterface, UserService } from '../_common/services/user.service';
import { PortalMainComponent } from './portal.main.component';
import { RouterModule } from '@angular/router';

/**
 * @title Application dashboard
 */
@Component({
  selector: 'async-portal',
  standalone: true,
  providers: [UserService],
  imports: [CommonModule, PortalSidenavComponent, PortalMainComponent, RouterModule],
  template: `
  
  <div class="wrapper">
    <div  class="fixed-div">
      <async-portal-sidenav [user]="user" *ngIf="user"></async-portal-sidenav>
    </div>
    
    <div class="flexible-div">
      <router-outlet></router-outlet>
    </div>
    
  </div>
  `,
  styles: [`

  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .fixed-div {
    flex: 0 0 250px; /* Fixed width of 300px */
  }

  .flexible-div {
    flex: 1; /* Flexible div to occupy remaining space */
  }

/* Media query for mobile responsiveness */
@media screen and (max-width: 600px) {
    .container {
        flex-direction: column; /* Stack items vertically on smaller screens */
    }

    .fixed-div {
        flex: 0 0 100%; /* Full width for the fixed div */
    }

    .flexible-div {
        flex: 0 0 100%; /* Full width for the flexible div */
    }
}

  `],
})
export class PortalComponent implements OnInit, OnDestroy {
  user!: UserInterface;
  // init subscriptions list
  subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.userService.getUser().subscribe(
        res => {
          this.user = res as UserInterface
          Emitters.authEmitter.emit(true);
        },
        error => {
          //console.log(error)
          Emitters.authEmitter.emit(false);
          // redirect to home page
          this.router.navigate(['/'])
        }
      )
    )
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}