import { Component } from '@angular/core';

import { ScriptConfig } from './config/script-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UnidasCore';


  constructor(){

  }

  ngOnInit(){
    ScriptConfig.loadScripts();
  }
}
