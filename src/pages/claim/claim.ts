import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the ClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
})
export class ClaimPage {
 gifts:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getGiftproducts();
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimPage');
  }


  getGiftproducts(){
// alert('1')
    this.restProvider.getGiftproducts().then(data=>{

    console.log(data)
    this.gifts=data;

    })
  }

  

}
