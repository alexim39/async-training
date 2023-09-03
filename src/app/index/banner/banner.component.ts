import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TypingComponent } from './typing/typing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthComponent } from '../../auth/auth.component';
import { Subscription } from 'rxjs';
import { ThemeTogglerService } from 'src/app/_common/services/theme-toggler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-index-banner',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, TypingComponent],
  template: `
    <section>
      <header>
        <aside>
          <video autoplay muted loop [poster]="posterSource">
            <source [src]="videoSource" type="video/webm">
          </video>

          <article>
            <h1>
              Optimize your career growth with in-demand soft skills. <br> <em>in</em> <br> <span>A digitally powered online training at your convenience!.</span>
            </h1>

            <h3>
              <async-typing></async-typing>
            </h3>

            <div class="btn">
              <a (click)="openAuthComponent()" mat-raised-button [ngClass]="isDarkMode ? 'dark-mode' : ''">GET ACCOUNT</a>
              <a mat-raised-button color="accent" routerLink="courses">VIEW COURSES</a>
            </div>
          </article>

        </aside>
      </header>
    </section>
  `,
  styleUrls: [`banner.light-theme.scss`, `banner.dark-theme.scss`],
})
export class BannerComponent implements OnInit, OnDestroy  {
  subscriptions: Subscription[] = [];
  isDarkMode: boolean = false;

  posterSource: string = 'assets/img/bck1.png';
  videoSource: string = 'assets/vid/bck1.mp4';

  constructor(
    public dialog: MatDialog,
    private themeTogglerService: ThemeTogglerService
  ) {}

  openAuthComponent() {
    this.dialog.open(AuthComponent);
  }

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
