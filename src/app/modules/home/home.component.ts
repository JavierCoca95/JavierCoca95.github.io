import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { DeviceDetectorService, DeviceInfo, DeviceType } from 'ngx-device-detector';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],   
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent{
  deviceInfo : DeviceInfo = this.deviceService.getDeviceInfo();
  typeofdevice : string;
  @ViewChild('aboutme') appAboutMe!: AboutmeComponent;

  constructor(private deviceService: DeviceDetectorService) {
    this.typeofdevice = this.devicedetector();
  }

  goToLink() {
    window.scrollTo(this.appAboutMe);
  }
  
  
  devicedetector() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    return this.deviceInfo.deviceType 
  }

}


