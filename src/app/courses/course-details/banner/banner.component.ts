import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BannerPriceComponent } from './banner.price.component';
import { BannerProgramComponent } from './banner.program.component';
import { BannerMediaComponent } from './banner.media.component';

@Component({
  selector: 'async-course-details-banner',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, BannerPriceComponent, BannerProgramComponent, BannerMediaComponent],
  template: `
   <section>
    <async-banner-media></async-banner-media>
    <async-banner-price></async-banner-price>
    <async-banner-program></async-banner-program>
   </section>
  `,
  styles: [`
    section {
      height: 45em;
      border: 1px solid #ccc;
      position: absolute;
      z-index: 10;
      top: 10em;
      right: 10em;
      display: flex;
      margin: 0;
      padding: 0;
      flex-direction: column;
      background: white;
    }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  section {
    height: 45em;
    position: relative;
    top: 0;
    right: 0;
    async-banner-media {
      /* display: none; */
      width: 100%;
    }
  }
}

/* iPads/tablet (portrait and landscape) */
@media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {
  section {
    height: 45em;
    position: relative;
    top: 0;
    right: 0;
   /*  async-banner-media {
      display: none;
    } */
  }
}

/* Desktops and laptops  (Laptop and desktop, 1025px and up ) */
@media only screen and (min-device-width: 1025px)  {
  section {
    top: 5em;
    right: 5em;
  }
}

/* Large screens -*/
@media only screen and (min-width: 1824px) {
  section {
    top: 10em;
    right: 10em;
  }
}


`]
})
export class CourseDetailsBannerComponent {}