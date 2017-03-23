import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the Search provider.

  See http://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export interface Data {
  dt: string;
}
@Injectable()
export class Search {

  constructor(public http: Http) {
    console.log('Hello Search Provider');
  }
    getAllBook():Observable<Data[]>{
      console.log('inside service getallbooks2');
    //  let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    //   let options = new RequestOptions({ headers: headers });
    return this.http.get('http://172.17.120.74:8000/getdata')
     .map((res:Response)  => res.json());
  }
}