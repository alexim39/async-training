import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseInterface } from '../../course.interface';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'async-course-details-outcomes',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, CommonModule],
  template: `
   <section class="course-details-outcome">
    <article>
        <h3>Key Learning Outcomes</h3>

        <p [innerHTML]="course.keyLearningOutcome"></p>
      </article>
   </section>
  `,
  styleUrls: [`course-details.outcome.component.scss`]
})
export class CourseDetailsOutcomesComponent implements OnInit, OnDestroy {
  @Input() course!: CourseInterface
  subscriptions: Array<Subscription> = [];


  constructor() {}

  ngOnInit(): void {
  
  }

  ngOnDestroy(): void {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
