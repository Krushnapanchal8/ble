import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-pressure-page',
  templateUrl: './pressure-page.page.html',
  styleUrls: ['./pressure-page.page.scss'],
})
export class PressurePagePage implements OnInit {
  peakPressure: number;

  constructor(private ble: BLE, private commonService: CommonService) { }
  deviceInfo:any;
  currentPressure;

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.deviceInfo = this.commonService.deviceInfo
    this.readPressureData();
  }

  readPressureData() {
    
    this.ble.read(this.deviceInfo.id, "10131211-7e4c-458e-ab56-d1491dc833f4", "10131212-7e4c-458e-ab56-d1491dc833f4").then(res => {
      let res2 = new Float32Array(1);
      console.log(res2);
      this.currentPressure = res2[0];
    }).catch(err => {
      console.log(err)
    });


    this.ble.read(this.deviceInfo.id, "10131211-7e4c-458e-ab56-d1491dc833f4", "10131213-7e4c-458e-ab56-d1491dc833f4").then(res => {
      let res2 = new Float32Array(1);
      this.peakPressure = res2[0]
    }).catch(err => {
      console.log(err)
    })
  }
}
