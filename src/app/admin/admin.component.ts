import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminName = 'Dibya Admin';
  id = "" ;

  constructor(private _fetchService: FetchService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params['id'] );
   }

  data = {};
  
  ngOnInit() {
    this._fetchService.getActivity(this.id).subscribe(
      data => { this.data = data; console.log(data); },
      err => console.error(err)
     );
  }

}
