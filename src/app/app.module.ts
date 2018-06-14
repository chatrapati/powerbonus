import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { RewardPointsPage } from '../pages/reward-points/reward-points';
 import { ProfilePage } from '../pages/profile/profile';
 import { PointsPage } from '../pages/Points/Points';
//  import { ClaimPage } from '../pages/claim/claim';
 import { ChangepasswordPage } from '../pages/changepassword/changepassword';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  
    LoginPage,
    ProfilePage,
    RewardPointsPage,
    PointsPage,
    // ClaimPage,
    ChangepasswordPage
    // ScratchcodePage
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  
    LoginPage,
    ProfilePage,
    PointsPage,
    // ClaimPage,
    ChangepasswordPage,
    // ScratchcodePage
    RewardPointsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    Geolocation
  ]
})
export class AppModule {}
