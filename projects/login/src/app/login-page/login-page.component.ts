import { Component, Inject } from '@angular/core';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';

import { InteractionStatus, PopupRequest } from '@azure/msal-browser';
import { filter, Subject, takeUntil } from 'rxjs';

import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  appVersion!: any;
  isIframe = false;

  private readonly _destroying$ = new Subject<void>();

  constructor(@Inject(MSAL_GUARD_CONFIG)
              private msalGuardConfig: MsalGuardConfiguration,
              private broadcastService: MsalBroadcastService,
              private authService: MsalService,
              private loginPageService: LoginPageService ) { }

  ngOnInit(){
    //this.appVersion = localStorage.getItem(environment.appVersion.value) || '';
    this.isFrameValue();

    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      //this.setLoginDisplay();
    })
  }

  onSubmit(){
    console.log("dentro do submit")
    if (this.msalGuardConfig.authRequest){
      this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
        .subscribe({
          next: (result) => {
            console.log(result);
            //this.setLoginDisplay();
          },
          error: (error) => console.log(error)
        });
    } else {
      this.authService.loginPopup()
        .subscribe({
          next: (result) => {
            console.log(result);
            //this.setLoginDisplay();
          },
          error: (error) => console.log(error)
        });
    }
  }

  isFrameValue(){
    this.isIframe = window !== window.parent && !window.opener
    this.loginPageService.setIsFrameValue(this.isIframe)
  }

}
