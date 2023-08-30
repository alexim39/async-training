import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AboutStoryComponent } from './about.story.component';

/** @title Async training approach page */
@Component({
  selector: 'async-about-approach',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatIconModule, MatSelectModule, AboutStoryComponent],
  template: `

      <div class="training-approach">

        <div class="approach-card">
          <div class="title">
            <mat-icon fontIcon="water_drop"></mat-icon>
            <h1>Integrated Learning Approach</h1>
          </div>
          <div class="content">
              <p>
              Our innovative methodology seamlessly blends cutting-edge technology and tailored content to create a dynamic and personalized learning experience. Elevate your team's skills and knowledge with a solution that adapts to their needs, driving growth and success in today's rapidly evolving business landscape.
              </p>
          </div>
        </div>

        <div class="approach-card">
          <div class="title">
            <mat-icon fontIcon="lightbulb"></mat-icon>
            <h1>Course Content</h1>
          </div>
          <div class="content">
              <p>
              Our meticulously crafted courses are designed to empower learners with practical skills and up-to-the-minute knowledge. From in-demand professional certifications to specialized industry insights, our diverse array of courses ensures a transformative learning journey for individuals and teams alike. Stay ahead in your field with Async's comprehensive and engaging course content.
              </p>
            </div>
        </div>

        <div class="approach-card">
          <div class="title">
            <mat-icon fontIcon="approval_delegation"></mat-icon>
            <h1>Virtual Community</h1>
          </div>
          <div class="content">
            <p>
            Connect, collaborate, and thrive in a dynamic online hub designed to foster meaningful interactions. Engage with industry experts, share insights, and explore new opportunities in a supportive and innovative environment. Elevate your professional network with Async's Virtual Community and stay at the forefront of your field.
            </p>
          </div>
        </div>

        <div class="approach-card">
          <div class="title">
            <mat-icon fontIcon="supervised_user_circle"></mat-icon>
            <h1>Career Coaching</h1>
          </div>

          <div class="content">
            <p>
            Our tailored guidance and expert insights are designed to empower you at every step of your career. Whether you're a recent graduate or an experienced professional looking to pivot, our personalized coaching will help you navigate challenges, set clear goals, and unlock your full potential. Elevate your career with Async's dedicated support and take confident strides towards success.
            </p>
          </div>
        </div>

      </div>

  `,
  styles: [`
    .training-approach {
      background-color: #00838F;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 3em;
      align-items: center;

      .approach-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          color: white;
          h1 {
            font-size: 1.5em;
            margin-top: -0.2em;
            font-family: system-ui;
          }
          mat-icon {
            border-radius: 50%;
            color: white;
            border: 1px solid white;
            transform: scale(2);
            margin-right: 1em;
          }
        }

        .content {
          color: white;
          font-size: 0.9em;
          padding-left: 3em;
          p {
            line-height: 2em;
            text-align: justify;
          }
        }
      }
    }


/* Extra small devices (phones, 1500px and down) */
@media only screen and (max-width: 1500px) {
  .training-approach {
      display: flex;
      flex-direction: column;
      .approach-card {
        margin-top: 2em;
      }
  }
}
  `],
})
export class AboutApproachComponent {}
