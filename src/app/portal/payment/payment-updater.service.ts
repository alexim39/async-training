import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PaymentUpdaterService {
  // Create a Subject for communication
  private actionSubject = new Subject<boolean>();

  // Observable to listen for actions
  action$ = this.actionSubject.asObservable();

  // Method to trigger an action
  triggerAction(hasUserPaid: boolean) {
    this.actionSubject.next(hasUserPaid);
  }
}