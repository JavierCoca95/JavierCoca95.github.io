import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { AppService } from 'src/app/services/appservice.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = [];
  projectSub : Subscription = new Subscription();

  constructor(private appService: AppService) { }

  ngOnDestroy(): void {
    this.projectSub?.unsubscribe();
    console.log('Se ha desuscrito');
  }

  ngOnInit(): void {
    this.projectSub = this.appService.getProjects().subscribe({
      next: (res: Project[]) => {
        this.projects = res;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      },
      complete: () => {
        console.log('Observable completed');
      }
    });
  }

}
