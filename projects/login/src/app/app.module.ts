import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: LoginPageComponent }], {
      useHash: true,
    }),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-login', elem);
  }

  ngDoBootstrap() {}
}
