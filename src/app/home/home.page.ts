import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BLE } from '@ionic-native/ble/ngx';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ble:BLE, private commonService:CommonService, private router: Router) {}
  type;
  deviceInfo:any;
  pressure1:number;
  pressure2:number;
  pressure3:number;
  pressure4:number;
  pressure5:number;
  


  onChange(type1,val){
    this.type=type1
  }

  ionViewWillEnter(){
    this.deviceInfo = this.commonService.deviceInfo;
    this.readData()
  }

  goToPressurePage(){
    this.router.navigate(['/pressure-page'])
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.readData()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  readData(){
    //read data for pressure1
   this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1712-39D7-487C-A107-BE04DA86CA15").then(res => {
      console.log(res);
     let res1 = new Float32Array(res);
     console.log(res1);
     this.pressure1 = res1[0];
   }).catch(err => {
    console.log(err)
   })


   //read data for pressure2
   this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1713-39D7-487C-A107-BE04DA86CA15").then(res => {
    console.log(res);
   let res1 = new Float32Array(res);
   console.log(res1);
   this.pressure2 = res1[0];
 }).catch(err => {
  console.log(err)
 })


 //read data for pressure3
 this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1714-39D7-487C-A107-BE04DA86CA15").then(res => {
  console.log(res);
 let res1 = new Float32Array(res);
 console.log(res1);
 this.pressure3 = res1[0];
}).catch(err => {
console.log(err)
})


//read data for pressure4
this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1715-39D7-487C-A107-BE04DA86CA15").then(res => {
  console.log(res);
 let res1 = new Float32Array(res);
 console.log(res1);
 this.pressure4 = res1[0];
}).catch(err => {
console.log(err)
})


//read data for pressure5
this.ble.read(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1716-39D7-487C-A107-BE04DA86CA15").then(res => {
  console.log(res);
 let res1 = new Float32Array(res);
 console.log(res1);
 this.pressure5 = res1[0];
}).catch(err => {
console.log(err)
})
  }


  writeData(){
    // Write data for pressure p1
    let p1 = new Float32Array(1);
    p1[0] = this.pressure1;
    this.ble.write(this.deviceInfo.id,"F0CB1711-39D7-487C-A107-BE04DA86CA15","F0CB1712-39D7-487C-A107-BE04DA86CA15",p1.buffer).then(res=>{
     }).catch( err => {
      console.log(err)
     });


     //write data for pressure2
     let p2 = new Float32Array(1)
     p2[0] = this.pressure2;
     this.ble.write(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1713-39D7-487C-A107-BE04DA86CA15", p2.buffer).then(res => {
     }).catch(err => {
      console.log(err)
     })


     //write data for pressure3
     let p3 = new Float32Array(1);
     p3[0] = this.pressure3;
     this.ble.write(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1714-39D7-487C-A107-BE04DA86CA15", p3.buffer).then(res => {
     }).catch(err => {
      console.log(err)
     })


     //write data for pressure4
     let p4 = new Float32Array(1);
     p4[0] = this.pressure4;
     this.ble.write(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1715-39D7-487C-A107-BE04DA86CA15", p4.buffer).then(res => {
     }).catch(err => {
      console.log(err)
     })


     //write data for pressure5
     let p5 = new Float32Array(1);
     p5[0] = this.pressure5;
     this.ble.write(this.deviceInfo.id, "F0CB1711-39D7-487C-A107-BE04DA86CA15", "F0CB1716-39D7-487C-A107-BE04DA86CA15", p5.buffer).then(res => {
      alert("Pressure updated successfully");
     }).catch(err => {
      console.log(err)
     })
  }
 

}
