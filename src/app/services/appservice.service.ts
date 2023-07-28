import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Project } from '../models/project.model';
import { Link } from '../models/link.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getLinks() : Observable<Link[]> {
    return this.http.get<Link[]>(`assets/mocks/links.mock.json?v=` + Date.now())
  }

  getProjects() : Observable<Project[]>  {
    return this.http.get<Project[]>(`assets/mocks/projects.json?v=` + Date.now());
  }
}