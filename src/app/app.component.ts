import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { OrdersPage } from '../pages/Orders/Orders';

import { PointsPage } from '../pages/Points/Points';
import { HistoryPage } from '../pages/History/History';
import { RewardPointsPage } from '../pages/reward-points/reward-points';
import { ScratchcodePage } from '../pages/scratchcode/scratchcode';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ClaimPage } from '../pages/claim/claim';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage ,icon:'home'},
      {title: 'Profile',component: ProfilePage,icon:'person' },
      {title: 'Orders',component: OrdersPage ,icon:'cart'},
      {title: 'Rewards',component: RewardPointsPage,icon:'ribbon' },
      {title: 'Points',component: PointsPage,icon:'star' },
      {title: 'History',component: HistoryPage ,icon:'clock'},
      {title: 'Change Password',component: ChangepasswordPage ,icon:'clock'}
     
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
     this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
     this.nav.push(page.component);
  }
}
