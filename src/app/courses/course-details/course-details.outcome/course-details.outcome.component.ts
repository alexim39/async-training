import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseInterface } from '../../course.interface';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'async-course-details-outcomes',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, CommonModule],
  template: `
   <section [ngClass]="isDarkMode ? 'dark-mode' : ''">
    <article>
        <h3>Key Learning Outcomes</h3>

        <p [innerHTML]="course.keyLearningOutcome"></p>
      </article>
   </section>
  `,
  styleUrls: [`course-details.outcome.light-theme.scss`, `course-details.outcome.dark-theme.scss`]
})
export class CourseDetailsOutcomesComponent implements OnInit, OnDestroy {
  @Input() course!: CourseInterface
  subscriptions: Array<Subscription> = [];
  isDarkMode: boolean = false;


  constructor(
    private themeTogglerService: ThemeTogglerService,
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      // Subscribe to the action
      this.themeTogglerService.toggleAction$.subscribe((isDarkMode) => {
        // check theme toogle status
        this.isDarkMode = isDarkMode;
        //console.log('Action triggered in nav.', isDarkMode);
      })
    )
  }

  ngOnDestroy(): void {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
