import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ble:BLE, private commonService:CommonService) {}
  type;
  deviceInfo:any;
  pressure1:number;
  pressure2:number;
  pressure3:number;
  pressure4:number;
  pressure5:number;
  


  onChange(type1,val){
    this.type=type1
    console.log(this.pressure1)
  }

  ionViewWillEnter(){
    this.deviceInfo = this.commonService.deviceInfo;
    this.readData()
  }

  // read data from a characteristic, do something with output data
  readData(){
   this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1712-39D7-487C-A107-BE04DA86CA15").then(res => {
      console.log(res);
     let res1 = new Float32Array(res);
     console.log(res1);
     this.pressure1 = res1[0];
   }).catch(err => {
    console.log(err)
   })

   this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1713-39D7-487C-A107-BE04DA86CA15").then(res => {
    console.log(res);
   let res1 = new Float32Array(res);
   console.log(res1);
   this.pressure2 = res1[0];
 }).catch(err => {
  console.log(err)
 })

 this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1714-39D7-487C-A107-BE04DA86CA15").then(res => {
  console.log(res);
 let res1 = new Float32Array(res);
 console.log(res1);
 this.pressure3 = res1[0];
}).catch(err => {
console.log(err)
})

this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1715-39D7-487C-A107-BE04DA86CA15").then(res => {
  console.log(res);
 let res1 = new Float32Array(res);
 console.log(res1);
 this.pressure4 = res1[0];
}).catch(err => {
console.log(err)
})

this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1716-39D7-487C-A107-BE04DA86CA15").then(res => {
  console.log(res);
 let res1 = new Float32Array(res);
 console.log(res1);
 this.pressure5 = res1[0];
}).catch(err => {
console.log(err)
})
  }

}
