import { AdalService } from 'ng2-adal/core';
import { WishListService } from './../../providers/wishList.service';
import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-wishList',
  templateUrl: 'wishList.html'
})
export class WishListPage {
 book: any[];
 isbn;
 token;
 mid;
  constructor(public navCtrl: NavController,private wishList: WishListService, public adalService: AdalService) {

  }

 getDetails(mid,token) {
    console.log('inside service get wish details');
    this.wishList.getWishBookDetails(mid,token).subscribe(
      data => {
        this.book = data
        console.log(this.book);
      },
      error => console.log(error)
    );
  }
  ngOnInit() {
    this.getDetails(this.mid,this.token);
  }

}