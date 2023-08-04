import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent
  ],
  imports: [   
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class HomeModule { }
