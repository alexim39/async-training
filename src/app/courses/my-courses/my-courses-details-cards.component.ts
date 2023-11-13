import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


/**
 * @title Card with actions alignment option
 */
@Component({
  selector: 'async-my-courses-details-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `

    <div class="card-container">
      <mat-card>
        <h2>Course Progress</h2>
        <mat-icon class="icon">straight</mat-icon>
        <mat-card-content>Progress 0%</mat-card-content>
      </mat-card>

      <mat-card>
        <h2>Course Performance</h2>
        <mat-icon class="icon">star_half</mat-icon>
        <mat-card-content>Performance 0%</mat-card-content>
      </mat-card>

      <mat-card>
        <h2>Course Grade</h2>
        <mat-icon class="icon">grade</mat-icon>
        <mat-card-content>Grade 0%</mat-card-content>
      </mat-card>
     
    </div>

    <hr>

  `,
  styles: [`
   .card-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 1em;
        mat-card {
            background: linear-gradient(to bottom, #fff, #ccc);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px 40px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h2 {
              font-size: 15px;
              margin: 0;
              color: #00838f;;
            }
            .icon {
              margin: 10px 0; 
              color: #00838f;
              border: 1px solid #00838f;
              border-radius: 50%;
              padding: 0.2em;
            }
            mat-card-content {
              font-size: 10px;
              font-weight:bolder;
            }
        }
    }
    hr {
      opacity: 0.1;
    }
  `]
})
export class MyCoursesDetailsCardsComponent {}