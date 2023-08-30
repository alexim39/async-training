import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

/** @title Simple form field */
@Component({
  selector: 'async-about-story',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatIconModule, MatSelectModule,],
  template: `



      <div class="our-story">

        <div class="img-content">
            <img src="assets/img/story.jpg" alt="About Async Solutions">
        </div>

        <div class="text-content">
          <h1>
              Our Story?
            </h1>

            <p>
            Async Solutions Limited, a pioneering IT firm in Nigeria, embarked on a journey to redefine technology integration. From the outset, our focus was clear: to provide customized Information Systems that effortlessly aligned with each client's distinct operational landscape.
            </p>

            <p>
            Fuelled by innovation and guided by unwavering values, Async Solutions transcended the role of a mere service provider, evolving into a trusted partner that not only achieved clients' IT objectives but also catalyzed transformative change throughout Nigeria's business sphere.
            </p>
        </div>


      </div>



  `,
  styles: [`

      .our-story {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-grow: 1;
        padding: 4em;
        background-color: #eee;

        .img-content {
            width: 50%;
            margin-bottom: -0.5em;
            img {
              width: 100%;
              border-radius: 5%;
            }
        }
      .text-content {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2em;
        h1 {
          text-align: right;
        }
        p {
          text-align: left;
          font-family: system-ui;
        }
      }
    }


/* Extra small devices (phones, 750px and down) */
@media only screen and (max-width: 750px) {
  .our-story {
    display: flex;
    flex-direction: row;
    padding: 1em;


    .img-content {
      display: none;
    }
    .text-content {
      width: 100%;
      text-align: justify;
    }
  }
}
  `],
})
export class AboutStoryComponent {}
