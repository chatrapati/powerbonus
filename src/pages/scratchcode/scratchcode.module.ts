import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScratchcodePage } from './scratchcode';

@NgModule({
  declarations: [
    ScratchcodePage,
  ],
  imports: [
    IonicPageModule.forChild(ScratchcodePage),
  ],
})
export class ScratchcodePageModule {}
