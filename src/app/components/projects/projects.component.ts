import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { AppService } from 'src/app/services/appservice.service';
import { Subscription} from 'rxjs';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ViewChild, TemplateRef } from '@angular/core';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  @ViewChild('errorsnack') customSnackBarTemplate! : TemplateRef<Element>;

  projects: Project[] = [];
  projectSub : Subscription = new Subscription();

  constructor(private appService: AppService, private _snack: MatSnackBar) { }

  ngOnDestroy(): void {
    this.projectSub?.unsubscribe();
    console.log('Se ha desuscrito');
  }

  ngOnInit(): void {
    this.projectSub = this.appService.getProjects().subscribe({
      next: (res: Project[]) => {
        this.projects = res;
/*         this._snack.openFromTemplate(this.customSnackBarTemplate, {
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: 'snackbar-error'
        }); */
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

