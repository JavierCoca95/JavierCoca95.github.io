import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Link } from 'src/app/modules/home/models/link.model';
import { AppService } from 'src/app/services/appservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  links: Link[] = [];
  linkSub: Subscription = new Subscription();

  constructor(private appservice: AppService) {}

  ngOnDestroy() {
    this.linkSub?.unsubscribe();
  }

  ngOnInit() : void {
    this.linkSub = this.appservice.getLinks().subscribe({
      next: (res: Link[]) => {
        this.links = res;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      },
      complete: () => { }
    })
  }
}
