import {Component, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'async-index-testimonials',
  standalone: true,
  styleUrls: ['testimonials.light-theme.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  template: `
    <article class="testimonial">
      <h1>Testimonials</h1>

      <section>
        <figure class="snip1139">
          <blockquote class="quote">
          I recently completed a 4-week web design training that has been truly transformative. The instructors' expertise and practical teaching approach made the learning experience comprehensive and enjoyable. 
          From mastering design principles to understanding user experience, the course content was top-notch. 
          I highly recommend this training to anyone looking to quickly and effectively enhance their web design abilities.
            <div class="arrow"></div>
          </blockquote>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3"/>
          <div class="author">
            <h5>Brown Tamunotonye <span>- Coding & Web Design Training</span></h5>
          </div>
        </figure>

        <figure class="snip1139 hover">
          <blockquote class="quote">
          The hands-on projects were a standout feature, as they not only reinforced my understanding but also enhanced my problem-solving skills. 
          The collaborative nature of the training added a strong sense of community to the experience. In just four weeks, I've gone from a curious beginner to a confident web designer with a solid portfolio to showcase my skills.
            <div class="arrow"></div>
          </blockquote>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg" alt="sample47"/>
          <div class="author">
            <h5>Aliu Ibrahim<span>- Coding & Web Design Training</span></h5>
          </div>
        </figure>

        <figure class="snip1139">
          <blockquote class="quote">
          I am immensely grateful to the trainers, organizers, and fellow participants for making this experience so rewarding. 
          If you're considering a web design training that delivers both knowledge and practical skills in just four weeks, I wholeheartedly recommend this program. 
          It's an investment that yields priceless returns.
            <div class="arrow"></div>
          </blockquote>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg" alt="sample17"/>
          <div class="author">
            <h5>Andrew Eunice<span>- Coding & Web Design Training</span></h5>
          </div>
        </figure>
      </section>


    </article>
  `,

})
export class TestimonialsComponent implements OnInit, OnDestroy{
  // init subscriptions list
  subscriptions: Subscription[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
   
  }

  ngOnDestroy() {
    // unsubscribe list
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
