import { Component, Input, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CourseInterface } from '../course.interface';

@Component({
  selector: 'async-course-details-outcomes',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
   <section>
   <article>
      <h3>Key Learning Outcomes</h3>

      <p [innerHTML]="course.keyLearningOutcome"></p>
    </article>
   </section>
  `,
  styles: [`
    section {
      background: #E0E0E0;
      article {
        width: 60em;
        padding: 2em 0 2em 8em;
        h3 {
          color: #004D40;
        }
        p {
          text-align: justify;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5em;
          color: black;
        }
        ul {
          li {
            color: black;
            font-weight: bold;
            line-height: 2;
          }
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
      ul {
        width: 80%;
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
      ul {
        width: 80%;
      }
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
export class CourseDetailsOutcomesComponent implements OnInit {
  @Input() course!: CourseInterface

  ngOnInit(): void {
    //console.log('course== ',this.course)
  }
}
