import { AdalService } from 'ng2-adal/services/adal.service';
import { WishListService } from './../../providers/wishList.service';
import { GetBook } from './../../providers/getBook.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { IssueService, data } from '../../providers/issue-service';
import { HomeBodyService } from '../../providers/home-body.service';

/*
  Generated class for the DetailView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-view',
  templateUrl: 'detail-view.html'
})
export class DetailViewPage {
  isDisabled: boolean = false;
  isRenewDisabled: boolean = true;
  date;
  today;
bookWish=[];
  rate;
  token;
  mid: string;
  issueDate: string;
  dueDate: string;
  errorMessage: string;

  @Input()
  book:any
  constructor(public navCtrl: NavController,private wishListService: WishListService,public adalService:AdalService, public navParams: NavParams, private IssueService: IssueService, private toastCtrl: ToastController, private HomeBodyService: HomeBodyService,private getBook:GetBook) {
    // this.IssueService=IssueService;
    this.token = HomeBodyService.token;
    this.mid = HomeBodyService.mid;

  }
  showToastWithCloseButton = function (message: string, getColor: string) {
    let toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'OK',
      position: 'bottom',
     
      cssClass: getColor
    });
    toast.present();
  }

  showToast= function (message: string, getColor: string) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'bottom',
      cssClass: getColor,
       duration: 3000
    });
    toast.present();
  }
  requestBook = function () {
    this.IssueService.request(this.mid, this.book.isbn, this.token)
      .subscribe(response => {
        console.log(response);
        if (response._body === 'failed') {
          console.log('Sorry. Book not available right now...', 'info');
          this.showToastWithCloseButton('Sorry. Book not available right now...');
          this.isDisabled = true;
        } 
        else if (response._body === 'Too many requests') {
          console.log('Too many requests for the same book. Please try later ...');
          this.showToastWithCloseButton('Too many requests for the same book. Please try later ...', 'error');
          this.isDisabled = true;
        } 
        
        else if (response._body === 'Max') {
          console.log('Sorry. You can not take more than 3 books ...');
          this.showToastWithCloseButton('Sorry. You can not take more than 3 books ...', 'error');
          this.isDisabled = true;
        }
        else if (response._body === 'already Issued') {
          console.log('Sorry. You have already Issued this book ...');
          this.isDisabled = true;
          this.showToastWithCloseButton('Sorry. You have already Issued this book ...', 'oops');
        }
        else if (response._body === 'Already Requested') {
          console.log('Sorry. You have already Requested this book ...');
          this.isDisabled = true;
          this.showToastWithCloseButton('Sorry. You have already Requested this book ...', 'info');
        }
        else {
          console.log('Successfully requested for book. Collect book from kalinga library within 2 days');
          this.showToast('Successfully requested for book. Collect book from kalinga library within 2 days', 'success');
          this.isDisabled = true;
        }
      }, error => {
        console.error("error fetching");
      });

  }

		addWish(){
		    //  this.isbn=this.getBook();
		     console.log('in add wish-------1:'+this.book.isbn)
		     this.wishListService.addtowishlist(this.mid,this.book.isbn,this.adalService.getCachedToken(this.token)).subscribe(
		        data => {
		        this.bookWish = data
		        console.log("hey in add wish"+this.bookWish);
		      },
		      error => console.log(error)
		     )
		   }

  private _logError(data) {
    this.errorMessage = data.message;
    console.log(this.errorMessage);
  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DetailViewPage');
  }
 yam()
  {
   window.location.href = 'https://www.yammer.com/mindtree.com/#/threads/inGroup?type=in_group&feedId=11182246';
   
  }
  ngOnInit() {
    this.book=this.getBook.getBook();
 console.log(this.book.title);
  }

}
