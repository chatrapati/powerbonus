import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
//  import { ClaimPage } from '../../pages/claim/claim';
/**
 * Generated class for the RewardPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reward-points',
  templateUrl: 'reward-points.html',
})
export class RewardPointsPage {

  rewardPoints:any;
  mobileNo:any;
  totalrewardpoints:any;
  redeempoints:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restprovider:RestProvider,public storage:Storage) {
    this.rewardPoints = this.navParams.get('rewardPoints');
    this.getreward();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardPointsPage');
  }

getreward(){
 this.storage.get('mobileNo').then((mobileNo)=>{

  this.restprovider.rewardpoints(mobileNo).then(data=>{
console.log(data)
this.totalrewardpoints=data[0].RewardPoints;
this.redeempoints=data[0].RedeemPoints;
  })
})
}

redeem(){
  // alert("2");
   this.storage.get('mobileNo').then((mobileNo)=>{
   this.restprovider.getProfile(mobileNo).then(data=>{
     console.log(data);
     if(data==''){
       this.navCtrl.push("EditprofilePage");
     }
      else{
        this.navCtrl.push('ClaimPage')
      }

   })

 })
 
}

  

}
