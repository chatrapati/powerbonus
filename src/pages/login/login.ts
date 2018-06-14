import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';
import { stringify } from '@angular/core/src/render3/util';
import { ScratchcodePage} from '../../pages/scratchcode/scratchcode';
import { Storage } from '@ionic/storage';

declare var google;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //public loginData:{"user_mobile":""};

  loginData = {"user_mobile":"","password":""};

  userOtp:any;
  userExist : any;
  latitude:any;
  longitude:any;
  custId:any;
  // longLatArray=[];
 brandData:any;
 //marker={"buildingNum":"","streetName":""};
 marker = [];
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public restProvider: RestProvider,
     private geolocation: Geolocation,
     private storage: Storage) {
       this.getLocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
     // this.longLatArray.push(this.latitude,this.longitude);
    //  console.log(this.longLatArray)
      if (navigator.geolocation) {
        let geocoder = new google.maps.Geocoder();
        let latlng = new google.maps.LatLng(this.latitude, this.longitude);
        let request = { latLng: latlng };
    
        geocoder.geocode(request, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            let result = results[0];
            let rsltAdrComponent = result.address_components;
            let resultLength = rsltAdrComponent.length;
            console.log(JSON.stringify(rsltAdrComponent))
            if (result != null) {
            //  this.marker.buildingNum = rsltAdrComponent[resultLength-8].short_name;
            //  this.marker.streetName = rsltAdrComponent[resultLength-7].short_name;
            Object.keys(rsltAdrComponent).forEach(object=> {
              this.marker.push(rsltAdrComponent[object].short_name);
            })    
            
           // console.log(this.marker.toString())
              
         //   this.marker = rsltAdrComponent[0].short_name
            } else {
              alert("No address available!");
            }
            //console.log(this.marker)
          }
        });
    }
   
      this.storage.set('longLatarray',this.marker.toString());

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  
  userCheck(){
    this.restProvider.loginUser(this.loginData.user_mobile,this.loginData.password,this.latitude,this.longitude)
    .then(data => {
      console.log(data);
   
    });
  }

  createUser(){
    this.restProvider.getOtpUser(this.loginData.user_mobile,this.loginData.password)
    .then(data => {
      console.log(data);
   
    });
  }

  getOtp(){
//alert(JSON.stringify(this.loginData))
this.restProvider.otpUser(this.loginData.user_mobile)
.then(data => {
  console.log(data[0]);
 if(data[0].OTP){
this.userOtp =data[0].OTP;
this.userExist = data[0].UserExist;
if(this.userExist == 1){
this.userCheck();
}else if(this.userExist == 0){
this.createUser();
}
 }
});
  }


 
  userLogin(){
    if(this.userOtp == this.loginData.password){
      this.restProvider.createAndLoginUser(this.loginData.user_mobile,this.loginData.password)
      .then(data => {
      
        this.custId = data;

        this.storage.set('pwd',this.loginData.password);

        this.storage.set('mobileNo',this.loginData.user_mobile)
      
        // this.navCtrl.push('ScratchcodePage',{mobileNo:this.loginData.user_mobile});
      this.navCtrl.setRoot('ScratchcodePage')
      });
    }
   
  }

}
