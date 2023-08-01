import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AppService } from 'src/app/services/appservice.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],   
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{
  deviceInfo!: { isMobile: boolean; isDesktop: boolean; isTablet: boolean; };
  @ViewChild('aboutme') appAboutMe!: AboutmeComponent;

  constructor(private deviceService: AppService) {
  }

  goToLink() {
    window.scrollTo(this.appAboutMe);
  }
  
  ngOnInit() {
    this.deviceInfo = this.deviceService.devicetype();
  }

  
  
  }




