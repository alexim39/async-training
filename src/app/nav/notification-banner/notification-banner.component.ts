import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @title Application top notifcation banner
 */
@Component({
  selector: 'async-notification-banner',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <section>
      <p>Artificial Intelligence (AI): Unlock The Power of AI in the Workplace, Boost Your Career & Productivity - 
        <a routerLink="courses/details/670500a1ab19ecfa4e733332" [ngClass]="{ blink: isBlinking }">JOIN OUR FREE 2 DAYS LUNCHBOX AI TRAINING</a>
      </p>
    </section>
  `,
  styles: [`
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #00838F;
      color: white;
      font-family: ui-rounded;
      padding-left: 1em;
      padding-right: 1em;
      font-size: 0.9em;
      a {
        text-decoration: none;
        color: white;
        font-size: 1em;
        color: orange;
        /* color: #ffab40; */
        font-weight: bolder;
      }
      .blink {
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  `]
})
export class NotificationBannerComponent {
  isBlinking = true;
}