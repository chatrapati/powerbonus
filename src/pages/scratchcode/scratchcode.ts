import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-scratchcode',
  templateUrl: 'scratchcode.html',
})
export class ScratchcodePage {

  brandData:any;
  brandArray=[];
  skus:any;
  selectedSku:any;
  rewardPoints:any;
  mrp:any;
  mobileNo:any;
  visibleNo:any;
  hologramId:any;
  selectedBrand:any;
  longLatarray:any;
  verificationStatus:any;
  scratchNo:any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     public restProvider: RestProvider,private storage: Storage) {
   //  this.mobileNo =  this.navParams.get('mobileNo')
    this.getBrandDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScratchcodePage');
  }

  getSku(obj){
    // alert(obj)
    this.restProvider.getallSku(obj).then(data=>{
      // console.log(data)
      this.skus=data;
    })
   // alert(obj)
  }


  getBrandDetails(){
    // alert('1')
    this.restProvider.getBrands()
    .then((data) =>{
     
       this.brandData=data;
     
       Object.keys(this.brandData).forEach(key=> {
      
       if(this.brandData[key].IsApproved == true){
        this.brandArray.push(this.brandData[key])
       }  
       
    });
  //  console.log(this.brandArray)


    });
  }

  getSkuOnSelectedBrand(selBrand,selSku){
this.selectedSku = selSku;
this.selectedBrand = selBrand;
if(this.selectedSku != undefined){
  Object.keys(this.skus).forEach(key=> {
    
     if(this.skus[key].SKU == this.selectedSku && this.skus[key].ClientId == this.selectedBrand){
      //this.brandArray.push(this.brandData[key])
      this.rewardPoints = this.skus[key].RewardPoints;
      this.mrp = this.skus[key].MRP;
     } 
     
  });
} else{
  this.mrp = 0;
  this.selectedSku = null;
}
  }


  verificationLogInsert(){
    this.storage.get('longLatarray').then((longLatarray)=>{
      this.storage.get('pwd').then((pwd)=>{
        this.restProvider.mobileVerificationLog(this.selectedBrand,this.scratchNo,this.visibleNo,this.hologramId,this.mrp,this.rewardPoints,longLatarray,this.mobileNo,this.verificationStatus,pwd,this.selectedSku).then(data=>{
         // console.log(data)
          this.navCtrl.push('RewardPointsPage',{rewardPoints:this.rewardPoints})
              })
      })
    
    })
   
  }
  
  getBasicRewardPoints(){
    this.restProvider.basicRewardPoints(this.selectedBrand,this.visibleNo).then(data=>{
     // console.log(data)
      this.rewardPoints = data[0].RewardPoints;

      this.verificationLogInsert();
    })
  }

 

  verify(scratchNo,selBrandId){
    this.scratchNo =scratchNo;
    this.storage.get('mobileNo').then((mobileNo)=>{
      this.mobileNo =mobileNo;
    this.restProvider.verificationCheck(this.scratchNo,mobileNo,selBrandId)
    .then((data) =>{
      
     //console.log(data)

     if(data[0].Result == 3){
      this.visibleNo = data[0].VisibleNumber;
      this.hologramId = data[0].HologramId;
      this.verificationStatus = data[0].ResultMessage;

      if(this.selectedSku == undefined){
        this.getBasicRewardPoints();
      }else{
        this.verificationLogInsert();
      }
      
     }else{

     }
 
 
     });
    })
  }

}
