import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class FetchService {

  constructor(private _http: HttpClient) { }

  getActivity(id) {
    return this._http.get('http://localhost:3000/get_activity/'+id);
  }

  storeActivity(id, data) {
    return this._http.get('http://localhost:3000/store_activity/' + id + "?data=" + data);
  }

}
