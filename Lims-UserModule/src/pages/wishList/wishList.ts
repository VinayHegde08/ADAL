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
<<<<<<< HEAD
 book;
=======
 book=[];
>>>>>>> 12a43f002a03ad3fe70690bbe66c3ae760887ab0
 isbn;
 token;
 mid;
  constructor(public navCtrl: NavController,private wishList: WishListService, public adalService: AdalService,  private HomeBodyService: HomeBodyService) {
    this.token = HomeBodyService.token;
    this.mid = HomeBodyService.mid;
  }

<<<<<<< HEAD

getBookDetails() {
    console.log('inside service getbook details',this.mid);
    this.wishList.getWishBookDetails(this.mid,this.token).subscribe(
      data => {
        this.book = data
=======
 getDetails(mid,token) {
    console.log('inside service get wish details------',mid);
    this.wishList.getWishBookDetails(mid,token).subscribe(
      data => {
        this.book = data
        console.log('yo---->>>',data);
        this.iterate(this.book)
        console.log('------>>',this.book[0]);
>>>>>>> 12a43f002a03ad3fe70690bbe66c3ae760887ab0
      },
      error => console.log(error)
    );
  }
<<<<<<< HEAD
  ngOnInit() {
    this.getBookDetails();
  }

  // iterate(book){
  //    var cmntArr = [];
  //    for (var key in book){
  //      var obj = book[key];
  //      console.log(obj);
  //      for(var prop in obj){
  //         console.log("hi there ", prop);
  //        var obj1 = obj[prop];
  //          console.log(obj1.content_excerpt);
  //          //cmntArr.push(obj1.content_excerpt);
  //      }
  //    }
  // }
  // ngOnInit() {
  //   console.log(this.mid)
  //   this.getDetails(this.mid,this.token);
  // }

=======

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

>>>>>>> 12a43f002a03ad3fe70690bbe66c3ae760887ab0
}