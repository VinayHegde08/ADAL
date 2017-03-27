import { FilterPage } from '../filter/filter';
import { NavController } from 'ionic-angular';
import { Search } from './../../providers/search.service';
import { Input,Output,EventEmitter } from '@angular/core';
import { NavParams,PopoverController } from 'ionic-angular'; 
import { Component,OnInit } from '@angular/core';

import {AdalService} from 'ng2-adal/core';

import { HomeBodyService} from '../providers/home-body.service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',

})
export class SearchPage{
 book:any[];
 showStyle:false;
 token;
  constructor(public nav:NavController,private search:Search,public adalService: AdalService) {
  this.token = this.adalService.getCachedToken(this.adalService.config.loginResource);

  }
  presentPopover($event)
  {
    this.nav.push(FilterPage);
  }
 
//    getAllBooks(){
//     console.log('inside service getallbooks');
//     this.search.getAllBook().subscribe(
//       data =>{
// this.book = data
// console.log(this.book);
//       } ,
//       error => console.log(error)
//     );
//   }
getAllBooks=function(){

       console.log("in get all books")
      this.search.getAllBooks(this.token).subscribe(data =>{
       this.book=data,
       error => console.log(error),

      //  this.categorisedBooks=this.Books;
       console.log("heloooooooooooooo",this.book)
       
   })
   }
  ngOnInit(){
     this.getAllBooks();
  }
  getStyle() {
  // let wishIsbn=isbn;
    if(this.showStyle) {
      return "#B22222";
    } else {
      return "";
    } 
  }
}
