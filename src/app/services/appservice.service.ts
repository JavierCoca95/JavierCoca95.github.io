import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getProjects() : Observable<Project[]>  {
    return this.http.get<Project[]>(`assets/mocks/projects.json?v=` + Date.now());
  }
}