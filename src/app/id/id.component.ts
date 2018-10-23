import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})

export class IdComponent implements OnInit {
  id = "null";
  status = "";

  constructor(private route: ActivatedRoute, private _fetchService: FetchService) {
    this.route.params.subscribe( params => this.id = params['id'] );
  }

  ngOnInit() {
  }
  
  mouseEnter(number){
    console.log("Entered :- ",number);
    this.status = "Entered picture number - "+number;
    this._fetchService.storeActivity(this.id, "Hovered over :- " + number).subscribe();
  }

  onClick(number){
    console.log("Clicked :- ",number); 
    this.status = "Clicked picture number - "+number;
    this._fetchService.storeActivity(this.id, "Clicker over :- " + number).subscribe();
  }

  mouseLeave(number){
    this.status = "Left picture number - "+number;
    console.log("Left :- ",number);
  }

}
