import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Emitters } from '../common/emitters/emitters';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortalSidenavComponent } from './portal.sidenav.component';
import { UserInterface, UserService } from '../common/user.service';
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
    
    <async-portal-sidenav [user]="user" *ngIf="user"></async-portal-sidenav>
    <router-outlet></router-outlet>
    
  </div>
  `,
  styles: [`

  .wrapper {
    display: flex;
    flex-direction: row;
    flex: 1;
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