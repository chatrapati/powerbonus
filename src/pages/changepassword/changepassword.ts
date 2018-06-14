import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
   mobileNo:any;
   

pass = {"password":"","confirmpassword":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider,public storage:Storage,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

  changepassword(){


    this.storage.get('mobileNo').then((mobileNo)=>{
      this.restProvider.changepassword(mobileNo,this.pass.password).then(data=>{
      console.log(data)
      // this.skus=data;
      if(data=='1'){
        const alert = this.alertCtrl.create({
      title: 'Password Saved Successfully!',
      buttons: ['OK']
    });
    alert.present();
    this.pass={"password":"","confirmpassword":""};
      }
      else{
        alert("Please Try Again..!")
      }
    
    })
  })

}
}