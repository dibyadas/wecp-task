import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spy Eyes 👀';

  constructor(private router: Router){
  }

  navig(value) { 
    this.router.navigate([value]);
  }

  toAdmin(value){
    this.router.navigate([value + "/admin"]);
  }

}
