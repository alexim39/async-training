import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BannerPriceComponent } from '../banner-price/banner.price.component';
import { CourseInterface } from '../../../course.interface';
import { CommonModule } from '@angular/common';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'async-banner-program',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, BannerPriceComponent],
  template: `
   <article class="banner-program">

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
  styleUrls: [`banner.program.light-theme.scss`]
})
export class BannerProgramComponent implements OnInit, OnDestroy{
  @Input() course!: CourseInterface
  subscriptions: Subscription[] = [];

  constructor(
  ) {  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
