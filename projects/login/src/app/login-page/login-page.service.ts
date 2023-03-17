import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  private isFrameValue = new BehaviorSubject<boolean>(false);
  isFrameValue$ = this.isFrameValue.asObservable();

  setIsFrameValue(value: boolean) {
    this.isFrameValue.next(value);
  }
}
