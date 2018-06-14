import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

  private apiUrl = 'https://powerbonus.in/api';


  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  otpUser(mobile) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/VerificationLog/'+mobile) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  loginUser(mobile,password,lat,long) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/Login',{"logId":mobile,"password":btoa(password),"IpAddress":[lat,long]}) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getOtpUser(mobile,otp) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/OTP',{"mobile":mobile,"OTP":otp}) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  createAndLoginUser(mobile,otp){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/MobCustomer',{"MobileNumber":mobile,"Pwd":atob(otp),"ClientId":-1}) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getBrands(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/ClientDetails') .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getallSku(barcode){
    return new Promise((resolve, reject) => {
      // alert(barcode+"rest")
      this.http.get(this.apiUrl+'/Default/'+barcode) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  verificationCheck(scratchNo,mobile,clientId){
    return new Promise((resolve, reject) => {
      // alert(barcode+"rest")
      this.http.post(this.apiUrl+'/VerificationCheck',{"ScratchNumber":scratchNo,"MobileNumber":mobile,"ClientId":clientId}) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  basicRewardPoints(clientId,visibleNo){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/BasicRewardpoint',{"ClientId":clientId,"VisibleNo":visibleNo}) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


    changepassword(usermobile,password){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/ClientApprovalPassword',{"UserName":usermobile,"UserPwd":btoa(password)}) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


     rewardpoints(usermobile){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/CustomerDashBoard/'+usermobile) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

       getProfile(usermobile){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/ShippingCustomerPut/'+usermobile) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  
  getGiftproducts(){

    return new Promise((resolve,reject)=>{
        this.http.get(this.apiUrl+'/GiftRewardRedeem') .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    })
  }

  getProfiletitle(){
  return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/ClientMater') .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

    getstate(){
  return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/State') .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


     getDistrict(){
  return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/District') .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  mobileVerificationLog(clientId,scratchNo,visibleNo,hologram,mrp,rewardpoints,longlat,mobileNo,status,pwd,sku){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/MobVerificationLogInsert',
      {"ClientId":clientId,"ScratchNumber":scratchNo,"VisibleNo":visibleNo,"HologramId":hologram,"MRP":mrp,"RewardPoint":rewardpoints,
      "LongLat":longlat,"MobileNumber":mobileNo,"Status":status,"VerificationCount":1,"Pwd":btoa(pwd),
      "SKU":sku,"SourceType":2}) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveprofileservice(titleid,stateid,districtid,editprofiledata){
        return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/RedeemCustomerPut',
      {"TitleId":titleid,"StateId":stateid,"DistrictId":districtid,"FirstName":editprofiledata.firstname,"MiddleName":editprofiledata.middlename,"LastName":editprofiledata.lastname,
      "Address1":editprofiledata.address1,"Address2":editprofiledata.address2,"Address3":editprofiledata.address3,"City":editprofiledata.city,"PinCode":editprofiledata.pincode,
      "EmailId":editprofiledata.email,"AltMobileNumber":editprofiledata.altermbl,"MobileNumber":editprofiledata.mobileno}) .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

}
