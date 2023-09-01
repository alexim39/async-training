import { Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BannerPriceComponent } from './banner.price.component';
import { CourseInterface } from '../../course.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-banner-program',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, BannerPriceComponent],
  template: `
   <article>

    <section>
      <mat-icon>calendar_today</mat-icon>
      <div>
        <span>Duration</span>
        <small> {{course.duration | titlecase}} <span class="start-date"> ({{course.startDate | date }} - {{course.endDate | date }})</span></small>
      </div>
    </section>

    <section>
      <mat-icon>attach_money</mat-icon>
      <div>
        <span>Expert-led Training</span>
        <small> {{course.category | titlecase}}</small>
      </div>
    </section>

    <section>
      <mat-icon>card_membership</mat-icon>
      <div>
        <span>Certificate</span>
        <small> {{course.isCerficate ? 'Certificate issued' : 'No certificate issued'}}</small>
      </div>
    </section>

    <section>
      <mat-icon>language</mat-icon>
      <div>
        <span>Language</span>
        <small> {{course.language | titlecase}}</small>
      </div>
    </section>

   </article>
  `,
  styles: [`
    article {
      width: inherit;
      height: 10em;
      display: flex;
      flex-direction: column;
      section {
        display: flex;
        flex-direction: row;
        margin: 1.2em;
        mat-icon {
          border-radius: 50%;
          border: 1px solid #00838F;
          padding: 0.5em;
          margin-right: 0.8em;
          color: #00838F;
        }
        div {
          display: flex;
          flex-direction: column;
          span {
            font-family: 'Brush Script MT', cursive;
            font-size: 1.5em;

          }
          small {
            font-size: 0.8em;
            margin-top: 0.6em;
            font-family: 'Trebuchet MS', sans-serif;
            color: #00838F;
            font-weight: bold;
            .start-date {
              color: #EF6C00;
              font-family: sans-serif;
              font-size: 1em;
            }
          }
        }
      }
    }
  `]
})
export class BannerProgramComponent implements OnInit {
  @Input() course!: CourseInterface

  ngOnInit(): void {
    //console.log('course ',this.course)
  }
}
