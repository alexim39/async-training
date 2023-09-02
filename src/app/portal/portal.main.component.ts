import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserInterface } from '../_common/services/user.service';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Main portal page
 */
@Component({
  selector: 'async-portal-main',
  standalone: true,
  providers: [],
  imports: [MatIconModule, MatButtonModule],
  template: `
    <div class="content">
      dashborad contents comes in here
    </div>
  `,
  styles: [`
.content {
  background: yellow;
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