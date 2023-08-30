import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

/** @title Async Mission and Core values page */
@Component({
  selector: 'async-mission-corevalues',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatIconModule, MatSelectModule, MatCardModule ],
  template: `

      <div class="mission-vision-corevalues">

        <mat-card class="mision-vision">
          <mat-card-content>

            <div class="mission">
              <h1>Our Mission</h1>
              <p>
              "At Async, we innovate tailored tech solutions for thriving businesses."
              </p>
            </div>

            <div class="vision">
              <h1>Our Vision</h1>
              <p>
              "We transform businesses through seamless integrated systems, shaping dynamic digital landscapes."
              </p>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="core-values">
          <mat-card-content>
            <h1>Our Core Values</h1>

            <ul>
              <li><strong>Innovation:</strong> We embrace creativity and stay ahead of the curve, consistently seeking new ways to deliver cutting-edge solutions that drive progress.</li>
              <li><strong>Integrity:</strong> We operate with honesty, transparency, and ethical principles, fostering trust with our clients, partners, and team members.</li>
              <li><strong>Client-Centric:</strong> Our focus remains steadfastly on our clients' unique needs, providing them with personalized solutions that enhance their business success.</li>
              <li><strong>Excellence:</strong> We uphold the highest standards of quality in every aspect of our work, consistently delivering excellence in every solution we provide.</li>
            </ul>
          </mat-card-content>
        </mat-card>

      </div>

  `,
  styles: [`
    .mission-vision-corevalues {
      display: flex;
      flex-direction: row;
      padding: 2em;
      h1 {
        color: #ffab40;
      }

      .mision-vision {
        padding: 1em;
        font-family: system-ui;
        text-align: justify;
        display: flex;
        justify-content: space-evenly;

        box-shadow: 10px 10px 20px black, 0 20px 55px #00838F, 0 0 15px #ffab40 ;

        .mission, .vision {
          width: 100%;
          p {
            font-size: 1.2em;
          }
        }
      }

      .core-values {
        display: flex;
        padding: 3em;
        font-family: system-ui;
        text-align: justify;
        margin-left: 3em;

        box-shadow: 10px 10px 20px black, 0 20px 55px #00838F, 0 0 15px #ffab40 ;

        ul {
          li {
             padding-top: 2em;
             strong {
              color: #00838F;
              /* color: #ffab40; */
             }
          }
        }
      }
  }




/* Extra small devices (phones, 1000px and down) */
@media only screen and (max-width: 1000px) {
  .mission-vision-corevalues {
      display: flex;
      flex-direction: column;
      .mision-vision {
        margin-bottom: 3em;
      }
  }
}
  `],
})
export class MissionCorevaluesComponent {}
