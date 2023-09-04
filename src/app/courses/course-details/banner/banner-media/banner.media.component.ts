import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BannerPriceComponent } from '../banner-price/banner.price.component';
import { BannerProgramComponent } from '../banner-program/banner.program.component';
import { CourseInterface } from '../../../course.interface';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-banner-media',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, CommonModule, MatIconModule, MatButtonModule, MatTooltipModule, BannerPriceComponent, BannerProgramComponent],
  template: `
  <section [ngClass]="isDarkMode ? 'dark-mode' : ''">
    <article>
        <video controls>
          <source [src]="mediaSource" type="video/mp4">
          Your browser does not support the video tag.
      </video>
    </article>
  </section>

  `,
  styleUrls: ['banner.media.light-theme.scss', '../banner.dark-theme.scss']
})
export class BannerMediaComponent implements OnInit, OnDestroy{
  mediaSource = `./assets/vid/website_promotion.mp4`;
  @Input() course!: CourseInterface
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
