import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BannerPriceComponent } from './banner-price/banner.price.component';
import { BannerProgramComponent } from './banner-program/banner.program.component';
import { BannerMediaComponent } from './banner-media/banner.media.component';
import { CourseInterface } from '../../course.interface';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-course-details-banner',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, BannerPriceComponent, BannerProgramComponent, BannerMediaComponent],
  template: `
   <section class="banner">
    <async-banner-media [course]="course"></async-banner-media>
    <async-banner-price [course]="course"></async-banner-price>
    <async-banner-program [course]="course"></async-banner-program>
   </section>
  `,
  styleUrls: [`banner.light-theme.scss`]
})
export class CourseDetailsBannerComponent implements OnInit, OnDestroy {
  @Input() course!: CourseInterface
  //isEmptyCourse = false;
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
