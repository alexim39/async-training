import { Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { CourseInterface } from '../../course.interface';

@Component({
  selector: 'async-banner-price',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, CommonModule],
  template: `

    <article class="price">
      <p><span class="current">{{course.currentPrice | currency:"NGN":"&#8358;" }}</span> <span class="divider"> | </span> <span class="old"> {{course.oldPrice | currency:"NGN":"&#8358;" }}</span></p>
      <small [innerHTML]="course.panelMsg"></small>

      <hr>

      <button *ngIf="isAddedToCard" mat-flat-button color="primary" (click)="addToCart()">Add to Cart</button>
      <button *ngIf="!isAddedToCard" mat-stroked-button color="primary" (click)="gotoCart()">Go to Cart</button>
    </article>

  `,
  styles: [`
    .price {
        background: none;
        width: inherit;
        text-align: center;
        .current {
          font-size: 1.5em;
          font-weight: bold;
          font-family: "Open Sans", sans;
          color: #00838F;
        }
        .divider {
          color: #aaa;
        }
        .old {
          color: #aaa;
          text-decoration: line-through
        }
        small {
          font-size: 0.8em;
          margin: 0 2em;
          color: gray;
        }
        hr {
          margin: 1em;
        }
        button {
          width: 300px;
        }
      }
  `]
})
export class BannerPriceComponent implements OnInit {
  @Input() course!: CourseInterface
  
  isAddedToCard = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //console.log('course ',this.course)
  }

  addToCart() {
    this.isAddedToCard = !this.isAddedToCard;

    //window.open('https://paystack.com/pay/async-training');
  }

  gotoCart() {
    this.router.navigate(['/cart']);
  }
}
