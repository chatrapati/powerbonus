import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditprofilePage} from '../../pages/editprofile/editprofile';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { ClaimPage } from '../../pages/claim/claim';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  
})
export class ProfilePage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public restprovider:RestProvider,public storage:Storage) {
 
    this.getprofile();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editpage(){
    this.navCtrl.push("EditprofilePage");
  }

  getprofile(){
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
