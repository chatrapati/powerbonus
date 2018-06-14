import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RewardPointsPage } from './reward-points';

@NgModule({
  declarations: [
    RewardPointsPage,
  ],
  imports: [
    IonicPageModule.forChild(RewardPointsPage),
  ],
})
export class RewardPointsPageModule {}
