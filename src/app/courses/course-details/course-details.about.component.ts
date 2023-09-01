import { Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseInterface } from '../course.interface';

@Component({
  selector: 'async-course-details-about',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
   <section>
    <article>
      <h3>About the Training</h3>
      <p [innerHTML]="course.about"></p>
    </article>
   </section>
  `,
  styles: [`
    section {
      background: #EEEEEE;
      article {
        width: 60em;
        padding: 2em 0 2em 8em;
        h3 {
          color: #006064;
        }
        p {
          text-align: justify;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5em;
        }
      }
    }


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  section {
    article {
      width: 100%;
      padding: 1em;
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
      p {
        width: 90%;
      }
    }
  }
}

/* Desktops and laptops  (Laptop and desktop, 1025px and up ) */
@media only screen and (min-device-width: 1025px)  {
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
export class CourseDetailsAboutComponent implements OnInit {
  @Input() course!: CourseInterface

  ngOnInit(): void {
    //console.log('course== ',this.course)
  }
}
