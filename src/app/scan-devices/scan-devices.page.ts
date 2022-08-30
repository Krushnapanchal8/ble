import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BLE } from '@ionic-native/ble/ngx';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-scan-devices',
  templateUrl: './scan-devices.page.html',
  styleUrls: ['./scan-devices.page.scss'],
})
export class ScanDevicesPage implements OnInit {

  constructor(private ble: BLE,private cd:ChangeDetectorRef,private router:Router, private commonService: CommonService) { }
  
  deviceList:any[] = [];


  ngOnInit() {
  }

  ionViewWillEnter(){
 
    this.ble.isEnabled().then(res => {
     this.scanDevices()
    }).catch(err => {
      this.ble.enable().then(res => {
        this.scanDevices()
      }).catch(err => {
        console.log('unable to connect device')
      })
    })
  }

  scanDevices(){
    this.ble.scan([],10).subscribe((device) => {
      console.log(device)
      this.deviceList.push(device);
      console.log(this.deviceList);
      this.cd.detectChanges()
    },
    (err) => {
      console.log(err);
    })
  }

  connect(device) {
    console.log(device)
    this.ble.connect(device.id).subscribe(device => {
      this.commonService.deviceInfo = device;
      console.log('device connected',device);
      this.router.navigate(['/home']);
    },
    (err) => {
      console.log(err)
    })
  }

}
