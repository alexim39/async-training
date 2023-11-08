import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserInterface } from '../_common/services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

/**
 * @title Main portal page
 */
@Component({
  selector: 'async-portal-main',
  standalone: true,
  providers: [],
  imports: [MatIconModule, MatButtonModule, RouterModule],
  template: `
    <section class="page_404">
      <img src="assets/img/dashboard.png">
      <!-- <div class="four_zero_four_bg">
          <h1 class="text-center">404</h1>
      </div> -->

      <div class="contant_box_404">
          <h3 class="h2">Course Management System</h3>
          <p>Manage your courses and progress seemlessly!</p>
          <button  mat-flat-button color="accent" routerLink="/portal/courses" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">View Courses</button>
      </div>
    </section>
  `,
  styles: [`
  
.page_404{ 
    padding:40px 0; 
    font-family: 'Arvo', serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 15em;
      margin-bottom: 2em;
    }
}

  

.four_zero_four_bg{ 
    height: 400px;
    width: 45%;
    background-position: center;
    h1{
        font-size:80px; 
        text-align: center;
    }
 }
 

.contant_box_404{ 
    margin-top:-50px;
    text-align: center;
    h3{
        font-size:30px; 
    }
    p {
        padding: 1em 0;
    }
    button {
        padding: 1em;
    }
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .contant_box_404{ 
        padding: 1em;
        h3 {
            font-family: Cursive;
            font-size:20px; 
        }
        p {
            padding: 1em 0;
        }
        button {
            padding: 1em;
        }
    }

}
`]

})
export class PortalMainComponent implements OnInit {
  @Input() user!: UserInterface

  constructor() { }

  ngOnInit(): void {
    //console.log(this.user)
  }

  
  
}