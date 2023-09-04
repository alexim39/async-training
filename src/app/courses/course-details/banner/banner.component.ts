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
   <section [ngClass]="isDarkMode ? 'dark-mode' : ''">
    <async-banner-media [course]="course"></async-banner-media>
    <async-banner-price [course]="course"></async-banner-price>
    <async-banner-program [course]="course"></async-banner-program>
   </section>
  `,
  styleUrls: [`banner.light-theme.scss`, `banner.dark-theme.scss`]
})
export class CourseDetailsBannerComponent implements OnInit, OnDestroy {
  @Input() course!: CourseInterface
  //isEmptyCourse = false;
  isDarkMode: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    private themeTogglerService: ThemeTogglerService
  ) {  }


  ngOnInit(): void {
    this.subscriptions.push(
      // Subscribe to the action
      this.themeTogglerService.toggleAction$.subscribe((isDarkMode) => {
        // check theme toogle status
        this.isDarkMode = isDarkMode;
        //console.log('Action triggered in TestimonialComponent.', isDarkMode);
      })
    )
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
