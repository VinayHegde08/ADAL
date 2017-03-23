import { FilterPage } from '../filter/filter';
import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html',

})
export class SearchPage{
 
  constructor(public nav:NavController) {}
  presentPopover($event)
  {
    this.nav.push(FilterPage);
  }
  
}
