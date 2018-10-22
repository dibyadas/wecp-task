import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})

export class IdComponent implements OnInit {
  idNum = "null";

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.idNum = params['id'] );
    // const events = [
    //     'scroll',
    //     'wheel',
    //     'touchmove',
    //     'touchend',
    // ];
    
    // const eventStreams = events.map((ev) => Observable.fromEvent($element, ev));
    // const allEvents$ = Observable.merge(...eventStreams);
  }

  ngOnInit() {
  }
  

  mouseEnter(number){
    console.log("Entered :- ",number);
  }

  onClick(number){
    console.log("Clicked :- ",number);
  }

  mouseLeave(number){
    console.log("Left :- ",number);
  }

}
