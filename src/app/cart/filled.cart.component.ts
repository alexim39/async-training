import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'async-filled-cart',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule, CommonModule],
  template: `
    <div class="wrapper">

      <section class="cart-list">
        <h5>Total 1 Course in Cart</h5>

        <mat-card>
          <mat-card-content>
           <!--  <div class="course-image">image</div>
            <div class="course-title">content</div>
            <div class="course-price">price</div> -->
            <figure>
              <img src="assets/img/img0.jpg" alt="course image">
              <figcaption>
                <small>Imenwwo Alex   <span>Software Engineer @ Async Solutions Ltd.</span></small>
              </figcaption>
            </figure>

            <section>
              <strong>Coding & Web Design</strong><br>
              <p>
              Learn to design and program web application with HTML5, CSS3, JavaScript, Typescript, Angular, NodeJS, jQuery, and ExpressJS.
              </p>
              <div>
                <span><mat-icon>timer</mat-icon>4 Weeks</span>
                <span><mat-icon>offline_bolt</mat-icon>Offline</span>
              </div>
            </section>

            <section>
              <p>Current cost &#8358;0</p>
              <p><mat-icon>delete</mat-icon></p>
            </section>

          </mat-card-content>
        </mat-card>
      </section>


      <section class="cart-checkout">
        <article>
          <div><span class="total-cost">Total Cost:</span> <span class="amount">&#8358;0</span></div>
          <hr>
          <div class="off-price">23% off from <span>&#8358;0</span></div>
          <button mat-flat-button color="primary">Checkout</button>
        </article>

        <!-- <article>
        <mat-form-field>
          <mat-label>Enter Coupon</mat-label>
          <input matInput>
        </mat-form-field>
        </article> -->
      </section>

    </div>
  `,
  styles: [`
  .wrapper {
    background: #ecf1f4;
    display: flex;
    flex-direction: row;
    padding: 2.5em;
    justify-content:  space-between;


    .cart-list {
      width: 60%;
      background: white;
      padding: 1em;

      mat-card {
        mat-card-content {
          display: flex;
          figure {
            img {
              width: 100px;
              height:100px;
              border-radius: 50%;
            }
          }
        }
      }
    }


    .cart-checkout {
      width: 30%;
      background: white;
      display: flex;
      flex-direction: column;
      padding: 1em;
      article {
        div {
          margin: 1em 0;
        }
        hr {
          color: #eee;
        }
        .off-price {
          text-align: center;
          color: #aaa;
          font-size: 0.8em;
        }
        .total-cost {
          color: gray;
        }
        .amount {
          color: black;
          font-size: 1.5em;
          margin-left: 0.1em;
        }
        button {
          width: 100%;
          margin: 1em 0;
        }
      }
    }
  }


  `]
})
export class FilledCartComponent {}
