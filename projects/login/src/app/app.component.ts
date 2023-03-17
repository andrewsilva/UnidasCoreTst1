import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginPageService } from './login-page/login-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isFrame: boolean = false;
  private subscription: Subscription;

  constructor(private router: Router,
              private loginPageService: LoginPageService){
    this.subscription = this.loginPageService.isFrameValue$.subscribe(value =>{
      this.isFrame = value;
    })
    this.router.initialNavigation();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
