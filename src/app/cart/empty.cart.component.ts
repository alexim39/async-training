import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'async-empty-cart',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule],
  template: `
    <section>
      <article>
        <mat-icon>remove_shopping_cart</mat-icon>
        <p>
          No course added to cart yet. Add course to kickstart your learning experience!
        </p>

        <button mat-flat-button color="primary" [routerLink]="['../']">Explore Courses</button>
      </article>
    </section>
  `,
  styles: [`
  section {
    background: white;
    padding: 2em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    article {
      background: #ecf1f4;
      border-radius: 0.25rem;
      padding: 3rem;
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 50%;
      mat-icon {
        color: #FF9100;
        border: 1px solid #FF9100;
        border-radius: 50%;
        padding: 1em;
      }
      p {
        color: gray;
        font-size: 0.8em;
        font-family:"Open Sans", sans;
      }
    }
  }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {}
  `]
})
export class EmptyCartComponent { }
