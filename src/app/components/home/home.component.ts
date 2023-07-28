import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from 'src/app/services/appservice.service';
import { Link } from 'src/app/models/link.model';
import { Subscription} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],   
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  links: Link[] = [];
  linkSub: Subscription = new Subscription();

  constructor(private appservice: AppService) {}

  ngOnDestroy() {
    this.linkSub?.unsubscribe();
    console.log('Se ha desuscrito');

  }

  ngOnInit() : void {
    this.linkSub = this.appservice.getLinks().subscribe({
      next: (res: Link[]) => {
        this.links = res;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      },
      complete: () => {
        console.log('Observable completed');

      }
  })
  }



}


