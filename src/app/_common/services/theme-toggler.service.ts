import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeTogglerService {
  // Create a Subject for communication
  private toggleActionSubject = new Subject<boolean>();

  // Observable to listen for actions
  toggleAction$ = this.toggleActionSubject.asObservable();

  // Method to trigger an action
  triggerToggleAction(themeModeStatus: boolean) {
    this.toggleActionSubject.next(themeModeStatus);
  }
}