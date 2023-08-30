import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmptyCartComponent } from './empty.cart.component';
import { FilledCartComponent } from './filled.cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-cart',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, EmptyCartComponent, FilledCartComponent, CommonModule],
  template: `
    <div class="cart">
      <article>Shopping Cart</article>
      <async-empty-cart *ngIf="isEmptyCart"></async-empty-cart>
      <async-filled-cart *ngIf="!isEmptyCart"></async-filled-cart>
    </div>
  `,
  styles: [`
    .cart {
      background: #00838F;
        article {
          font-size: 4em;
          text-align: center;
          color: white;
          font-family: "Open Sans", sans;
          padding: 1em 0;
        }
    }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  div {
    article {
      font-size: 2em;
    }
  }
}
  `]
})
export class CartComponent {
  isEmptyCart = 0;
  constructor() {
    //this.isEmptyCart = 0;
  }
 }
