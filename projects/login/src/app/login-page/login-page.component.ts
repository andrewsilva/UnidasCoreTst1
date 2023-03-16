import { Component } from '@angular/core';
import { environment } from '../config/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  appVersion = localStorage.getItem(environment.appVersion.key) || '';

  ngOnInit(){

  }

  onSubmit(){
    console.log("teste")
  }

}
