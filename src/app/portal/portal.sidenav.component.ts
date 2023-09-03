import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserInterface } from '../_common/services/user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';

/** @title Form field appearance variants */
@Component({
  selector: 'async-portal-sidenav',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule, MatChipsModule],
  template: `
    <div class="sidenav">
      <div class="profile">
        <img
          src="assets/img/default_pp.png"
          alt="profile_picture"
        />
        <h3>
          {{ this.user.lastname | titlecase }}
          {{ this.user.firstname | titlecase }}
        </h3>
        <p>{{ this.user.email | lowercase }}</p>
        <mat-chip-listbox aria-label="Fish selection">
          <mat-chip-option>Active</mat-chip-option>
        </mat-chip-listbox>
      </div>

       <ul>
            <li>
                <a routerLink="/portal" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    <span class="icon"><mat-icon>home</mat-icon></span>
                    <span class="item">Dashboard</span>
                </a>
            </li>
            <li>
                <a routerLink="courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    <span class="icon"><mat-icon>event_note</mat-icon></span>
                    <span class="item">All Courses</span>
                </a>
                <a routerLink="/portal/courses/my-courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    <span class="icon"><mat-icon>bookmark_added</mat-icon></span>
                    <span class="item">My Courses</span>
                </a>
            </li>
            <li>
                <a routerLink="settings" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    <span class="icon"><mat-icon>settings</mat-icon></span>
                    <span class="item">Settings</span>
                </a>
            </li>
        </ul>

    </div>
  `,
  styles: [`
* {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
.sidenav {
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #00838f;
  height: 100%;
  padding: 20px 0;
  transition: all 0.5s ease;
  border-right: 1px solid #097c87;
  height: 100%;
  .profile {
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
    }
    h3 {
      color: #ffffff;
      margin: 10px 0 5px;
    }
    p {
      color: rgb(206, 240, 253);
      font-size: 14px;
    }
    mat-chip-listbox {
      
    }
  }

    ul {
      li {
        a {
          display: flex;
          padding: 13px 30px;
          border-bottom: 1px solid #008c99;
          color: rgb(241, 237, 237);
          mat-icon{
            font-family: 'Material Icons' !important;
            margin-right: 10px;
          }
          &:hover {
            color: #0c7db1;
            background: white;
            border-right: 2px solid rgb(5, 68, 104);
          }
          
          &:hover:before,
          &.active:before {
            display: block;
          }
        }
        .active {
            color: #e6e1e1;
            font-size: 0.7em;
            border-right: 7px solid #ffab40;
          }
      }
    }
}
`],
})
export class PortalSidenavComponent implements OnInit {
  @Input() user!: UserInterface;

  ngOnInit(): void {
    //console.log(this.user);
  }
}
