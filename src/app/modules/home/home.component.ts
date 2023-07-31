import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],   
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  deviceInfo : any = null;
  @ViewChild('aboutme') appAboutMe!: AboutmeComponent;

  constructor(private deviceService: DeviceDetectorService) {
    this.epicFunction();
  }

  goToLink() {
    window.scrollTo(this.appAboutMe);
  }

  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }

}


