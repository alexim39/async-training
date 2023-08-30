import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LogoComponent } from '../common/logo.component';
import { FooterContactComponent } from './footer.contact.component';
import { FooterConnectedComponent } from './footer.connected.component';

@Component({
  selector: 'async-footer',
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule, LogoComponent, FooterContactComponent, FooterConnectedComponent],
  template: `
   <footer>
    <article>
      <section>
        <async-logo color="white" marginTop="0"></async-logo>

        <p>
        Async Solutions Limited is an Information Technology (IT) firm created with the vision to provide world-class IT solutions to both the public and private sectors in Nigeria.
        </p>

        <p>
        At Async, we seek to boost clients' value by providing them with a reliable Information System (IS) that sync with operations and information needs.
        </p>

        <p>
          For us, it's just about <strong>Providing Reliable Solutions</strong>
        </p>
      </section>
      <async-footer-contact></async-footer-contact>
      <async-footer-connected></async-footer-connected>
    </article>
    <p>© 2023 Async Solutions Limited. All Rights Reserved</p>
   </footer>
  `,
  styles: [`
    footer {
      background: #0e0e2c;
      text-align: center;
      padding-bottom: 0.5em;
      color: white;
      article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 4em 10em;
        text-align: left;
        section {
          width: 20em;
          text-align: left;
          p {
            font-size: 14px;
            text-align: justify;
            font-family:"Open Sans", sans;
          }
        }
      }
      p {
        color: #ccc;
        font-size: 0.6em;
      }
    }


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  footer {
    article {
      display: flex;
      flex-direction: column;
      padding: 1em;
      section {
        width: 100%;
      }
    }
  }
}

/* iPads/tablet (portrait and landscape) */
@media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {
  footer {
    article {
      display: flex;
      flex-direction: column;
      padding: 1em;
      section {
        width: 100%;
      }
    }
  }
}

`]
})
export class FooterComponent {}
