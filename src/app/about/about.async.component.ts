import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

/** @title Simple form field */
@Component({
  selector: 'async-about-async',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatIconModule, MatSelectModule],
  template: `
      <div class="about-training">
        <div class="text-content">
          <h1>
          Async - The IT Solutions that Works
          </h1>

          <p>
          Async Solutions Limited was established with a vision to deliver top-tier Information Technology (IT) solutions to both the public and private sectors in Nigeria.

          </p>

          <p>
          At Async, our aim is to enhance the value for our clients by offering dependable Information Systems (IS) that seamlessly align with their operational and informational requirements.
          </p>
        </div>
      </div>

  `,
  styles: [`
    .about-training {
        background-color: whitesmoke;
        padding: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #eee;
        .text-content {
          text-align: center;
          h1 {
            color: #00838F;
            font-size: 3em;
          }

          p {
            text-align: justify;
            font-family: system-ui;
            width: 45em;
          }
        }
      }


/* Extra small devices (phones, 750px and down) */
@media only screen and (max-width: 750px) {

    .about-training {
      padding: 1em;
      .text-content {
        h1 {
          font-size: 1.5em;
        }
        p {
          width: 100%;
        }
      }
    }
  }

  `],
})
export class AboutAsyncComponent {}
