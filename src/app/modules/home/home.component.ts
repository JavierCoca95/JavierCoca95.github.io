import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AboutmeComponent } from './components/aboutme/aboutme.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],   
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  @ViewChild('aboutme') appAboutMe!: AboutmeComponent;

  constructor() {}

  goToLink() {
    window.scrollTo(this.appAboutMe);
  }

}


