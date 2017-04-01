import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AdalService } from 'ng2-adal/core';

/*
  Generated class for the Search provider.

  See http://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export interface Data {
  dt: string;
}
@Injectable()
export class WishListService {
token;
  mid;
  isbn;
  constructor(public http: Http,public adalService: AdalService) {
    console.log('Hello wishlist Provider');
    this.token = this.adalService.getCachedToken(this.adalService.config.loginResource);
    this.mid = this.adalService.userInfo.userName.substring(0, 8);
    // this.name = this.adalService.userInfo.profile.name;
    // this.email = this.adalService.userInfo.profile.unique_name;
  }
    addtowishlist(mId: string,isbn:string,token):Observable<Data[]>{
      console.log('inside service Wish list');
      console.log('in addtowishlist---------->'+isbn+''+mId);
     let headers = new Headers({ 'Authorization': 'Bearer ' + token });
      let options = new RequestOptions({ headers: headers });
    return this.http.get("http://localhost:3000/addtowishlist/"+mId+"/"+isbn,options)
     .map((res:Response)  => res.json());
  }
  getBookDetails(mId:string,token):Observable<Data[]>{
      console.log('inside service Wish list');
      console.log('in addtowishlist'+mId);
     let headers = new Headers({ 'Authorization': 'Bearer ' + token });
      let options = new RequestOptions({ headers: headers });
    return this.http.get("http://localhost:3000/getisbndetails/"+ mId,options)
     .map((res:Response)  => res.json());
  }
  getWishBookDetails(mId: string,token)
  { console.log('inside wish book detail');
    console.log('in getwishbookdetail'+mId);
    let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
     return this.http.get("http://localhost:3000/getwishlist/"+ mId,options)
     .map((res:Response)  => res.json());
  }


}
