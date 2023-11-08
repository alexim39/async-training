import { Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseInterface } from '../course.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'async-course-details-intro',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
   <section>
    <article>
      <h2>{{course.title | titlecase}}</h2>
      <h3>{{course.subTitle}}</h3>
      <p [innerHTML]="course.subTitleParagraph"></p>
    </article>
  </section>
  `,
  styles: [`
    section {
      background: #00838F;
      article {
        color: white;
        width: 60em;
        padding: 2em 0 2em 8em;
        h2 {
          font-family: Garamond, serif;
          font-size: 2em;
        }
        h3 {
          font-family: Georgia, serif;
          font-size: 1em;
        }
        p {
          text-align: justify;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5em;
        }
        a {
          color: white;
          text-decoration: underline;
          font-weight: bold;
        }
      }
    }



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  section {
    article {
      width: 100%;
      padding: 1em;
      h2 {
        font-size: 1.4em;
      }
      h3 {
        font-size: 1em;
      }
      p {
        width: 90%;
      }
    }
  }
}

/* iPads/tablet (portrait and landscape) */
@media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {
  section {
    article {
      width: 100%;
      padding: 1em;
      h2 {
        font-size: 1.4em;
      }
      h3 {
        font-size: 1em;
      }
      p {
        width: 90%;
      }
    }
  }
}

/* Desktops and laptops  (Laptop and desktop, 1025px and up ) */
@media only screen and (min-width: 1025px)  {
  section {
    article {
      width: 50em;
    }
  }
}

/* Large screens -*/
@media only screen and (min-width: 1824px) {
  section {
    article {
      width: 70em;
    }
  }
}

`]
})
export class CourseDetailsIntroComponent implements OnInit{
  @Input() course!: CourseInterface

  ngOnInit(): void {
    //console.log('course== ',this.course)
  }
}
