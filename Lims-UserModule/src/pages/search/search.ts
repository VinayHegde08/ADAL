import { FilterPage } from '../filter/filter';
import { NavController } from 'ionic-angular';
import { Search } from './../../providers/search.service';
import { Input,Output,EventEmitter } from '@angular/core';
import { NavParams,PopoverController } from 'ionic-angular'; 
import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html',

})
export class SearchPage{
 book:any[];
  constructor(public nav:NavController,private search:Search) {}
  presentPopover($event)
  {
    this.nav.push(FilterPage);
  }
 
   getAllBooks(){
    console.log('inside service getallbooks');
    this.search.getAllBook().subscribe(
      data =>{
this.book = data
console.log(this.book);
      } ,
      error => console.log(error)
    );
  }
  ngOnInit(){
    this.getAllBooks();
  }
}
