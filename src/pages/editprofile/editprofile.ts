import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  titlename:any;
  statename:any;
  districtarray:any;
  districtsarra123=[];
  editprofiledata={"firstname":'',"middlename":'',"lastname":'',"address1":'',"address2":'',"address3":'',"city":'',"pincode":'',"email":'',"altermbl":'',"mobileno":''}

  constructor(public navCtrl: NavController, public navParams: NavParams,public restprovider:RestProvider,public storage:Storage) {
 this.Editprofile();
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  Editprofile(){
//alert("edit")
    this.restprovider.getProfiletitle().then(data=>{

    //  console.log(data);

      this.titlename=data;
    })

    this.restprovider.getstate().then(data=>{
     // alert("edit1")
      this.statename=data;
    })

    this.restprovider.getDistrict().then(data=>{
     // console.log(data);
      this.districtarray=data;
    })
  }

  statechange(stateid){
    //alert(stateid)
    this.districtsarra123 =[];
     Object.keys(this.districtarray).forEach(key=> {
      
       if(this.districtarray[key].StateId == stateid){
        this.districtsarra123.push(this.districtarray[key])
       
       }  
       
    });
       //console.log(this.districtsarra123)
  }

  saveprofile(titleid,stateid,districtid){

    this.restprovider.saveprofileservice(titleid,stateid,districtid,this.editprofiledata).then(data=>{
     console.log(data)
     if(data=='1'){
       this.navCtrl.push('ClaimPage')
     }
    })
  }

}
