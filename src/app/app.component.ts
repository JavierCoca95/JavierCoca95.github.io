import { Component, OnInit } from '@angular/core';
import { AppService } from './services/appservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  deviceInfo!: { isMobile: boolean; isDesktop: boolean; isTablet: boolean; };
  title = 'my-app';

  constructor(private appservice : AppService){}
  ngOnInit(): void {

    this.deviceInfo = this.appservice.devicetype();
    
  }
}
