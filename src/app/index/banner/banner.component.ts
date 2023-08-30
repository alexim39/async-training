import { Component } from '@angular/core';
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

@Component({
  selector: 'async-index-banner',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, TypingComponent],
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
              <a (click)="openAuthComponent()" mat-raised-button>GET ACCOUNT</a>
              <a mat-raised-button color="accent" routerLink="courses">VIEW COURSES</a>
            </div>
          </article>

        </aside>
      </header>
    </section>
  `,
  styles: [`
section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  header {
    background-size:cover;
    width: 100%;
    aside {
      background-image: linear-gradient(to left, rgba(9, 173, 151, 0.8) 26.48%, rgba(3, 61, 61, 0.8) 73.52%);
      min-height: 770px;
      text-align: center;
      position: relative;
      height: 100%;
      width: 100%;
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
      article {
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1 {
          color: white;
          font-size: 2.5em;
          font-family: Vadana;
          em {
            font-size: 0.5em;
          }
          span {
            font-size: 0.7em;
          }
        }
        h3 {
          margin-bottom: 2em;
        }
        div {
          a {
            margin-left: 1em;
          }
        }
      }
    }
  }
}

/* For mobile phones: */
@media only screen and (max-width:500px) {
  section {
    header {
      margin-bottom: -3em;
      margin-bottom: 1px;
    }
  }
}
`],
})
export class BannerComponent {

  posterSource: string = 'assets/img/bck1.png';
  videoSource: string = 'assets/vid/bck1.mp4';

  constructor(
    public dialog: MatDialog
  ) {}

  openAuthComponent() {
    this.dialog.open(AuthComponent);
  }

}
