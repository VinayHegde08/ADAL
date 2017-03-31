import { UserissuedhistoryPage } from './../pages/userissuedhistory/userissuedhistory';
import { UserManualPage } from './../pages/user-manual/user-manual';
import { Myissuedhistory } from './../providers/myissuedhistory';
import { ProfileService } from './../providers/profile-service';
import { SampleModalPage } from './../pages/modal/modal';
import { GetBook } from './../providers/getBook.service';
import { IssueService } from './../providers/issue-service';
import { DetailViewPage } from './../pages/detail-view/detail-view';
import { CategoriesPage } from './../pages/categories/categories';
import { LimsAdminComponent } from './lims-admin/lims-admin.component';
import { LimsUserComponent } from './lims-user/lims-user.component'; 

import { Http } from '@angular/http';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HelpPage} from '../pages/help/help';
import { NotificationPage } from '../pages/notification/notification';
import { SearchPage } from './../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AcknowledgementPage} from '../pages/acknowledgement/acknowledgement';
import {RecommendationPage} from '../pages/recommendation/recommendation';
import {WishListPage} from '../pages/wishList/wishList';
import { Search } from '../providers/search.service';

import { AdminHomeBodyService} from '../providers/admin-home-body.service';
import { HomeBodyService } from '../providers/home-body.service';

import {AdalService} from 'ng2-adal/core';
import {Authenticate} from '../providers/authenticate';
import { APP_BASE_HREF,HashLocationStrategy,LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    CategoriesPage,
    HelpPage,
    NotificationPage,
    HomePage,
    TabsPage,
    RecommendationPage,
    WishListPage,
    AcknowledgementPage,
    LimsUserComponent,
    LimsAdminComponent,
    DetailViewPage,
    SampleModalPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LimsUserComponent,
    SearchPage,
    CategoriesPage,
    HelpPage,
    NotificationPage,
    HomePage,
    TabsPage,
     RecommendationPage,
    WishListPage,
    AcknowledgementPage,
    LimsAdminComponent,
    DetailViewPage,SampleModalPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AdminHomeBodyService,HomeBodyService,Authenticate,Search,AdalService,IssueService,GetBook,ProfileService,Myissuedhistory,{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule {}
