import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BannerPriceComponent } from './banner.price.component';
import { BannerProgramComponent } from './banner.program.component';

@Component({
  selector: 'async-banner-media',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, BannerPriceComponent, BannerProgramComponent],
  template: `
  <section>
    <article>
        <video controls>
          <source src="./assets/vid/website_promotion.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </article>
  </section>

  `,
  styles: [`
  section {
    background: #aaa;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    article {
      width: 20em;
      height: 10em;
      padding: 0;
      margin: 0;
      video {
        height: 10em;
        width: 20em;
        text-align: center;
        padding: 0;
        margin: 0;
      }
    }
  }


    /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  section {
    article {
      background: #aaa;
    }
  }
}
`]
})
export class BannerMediaComponent {}
