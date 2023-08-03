import { Component, Input, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/appservice.service';
import { Project } from '../../models/project.model';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  @Input() deviceInfo: any;
  @ViewChild('errorsnack') customSnackBarTemplate! : TemplateRef<Element>;

  projects: Project[] = [];
  projectSub : Subscription = new Subscription();

  constructor(private AppService: AppService, private MatSnackBar: MatSnackBar) { }

  ngOnDestroy(): void {
    this.projectSub?.unsubscribe();
    console.log('Se ha desuscrito');
  }

  ngOnInit(): void {
    this.projectSub = this.AppService.getProjects().subscribe({
      next: (res: Project[]) => {
        this.projects = res;
      },
      error: (error: any) => {
        //this._snack.open('error', 'close');
      console.error('Error occurred:', error);
        
      },
      complete: () => {
        console.log('Observable completed');
      }
    });

    
  }
  }

