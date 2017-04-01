import { AdalService } from 'ng2-adal/core';
import { WishListService } from './../../providers/wishList.service';
import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';
 import {HomeBodyService} from '../../providers/home-body.service';

@Component({
  selector: 'page-wishList',
  templateUrl: 'wishList.html'
})
export class WishListPage {
 book=[];
 isbn;
 token;
 mid;
  constructor(public navCtrl: NavController,private wishList: WishListService, public adalService: AdalService,  private HomeBodyService: HomeBodyService) {
    this.token = HomeBodyService.token;
    this.mid = HomeBodyService.mid;
  }

 getDetails(mid,token) {
    console.log('inside service get wish details------',mid);
    this.wishList.getWishBookDetails(mid,token).subscribe(
      data => {
        this.book = data
        console.log('yo---->>>',data);
        this.iterate(this.book)
        console.log('------>>',this.book[0]);
      },
      error => console.log(error)
    );
  }

  iterate(book){
     var cmntArr = [];
     for (var key in book){
       var obj = book[key];
       console.log(obj);
       for(var prop in obj){
          console.log("hi there ", prop);
         var obj1 = obj[prop];
           console.log(obj1.content_excerpt);
           //cmntArr.push(obj1.content_excerpt);
       }
     }
  }
  ngOnInit() {
    console.log(this.mid)
    this.getDetails(this.mid,this.token);
  }

}