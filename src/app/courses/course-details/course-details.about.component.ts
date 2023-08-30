import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'async-course-details-about',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
   <section>
    <article>
      <h3>About the Training</h3>

      <p>
      With the high rate of life dependence on technology, it's eminent that we align ourselves and get ready for the coming technology revolution. Being digitally ready means you can partake in the New World.
      </p>
      <p>
      Here is an opportunity to get prepared and learn the skills required to partake not as an observer but as a pioneer in the new technology economy.
      </p>

      <p>
      This training is open to anyone whose goal is to become trained as a web designer/developer. The basic acceptance requirement is your willingness to learn and use your newly acquired skills.
      </p>

      <p>
      The trainer is a seasoned expert with working experience as a Software Engineer within and outside of Nigeria.
      </p>

      <p>
      Technologies that will be covered during the training include <strong>HTML5, CSS3, JavaScript, Typescript, front-end frameworks, and libraries like Angular, NodeJS, jQuery, and ExpressJS. MongoDB, MySQL and PhpMyAdmin</strong> will be used for the backend.
      </p>

      <p>
      Training duration is for a period of 4 weeks. Every Tuesday, Thursday, and Saturday (4 pm daily) are the training days. On this days intensive classes and discussions will be held. However, Sundays at 7:30 pm will be our online “Show Your Work” sessions. This session will allow participants to share their program and peer review each other’s tasks.
      </p>
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
export class CourseDetailsAboutComponent {}
