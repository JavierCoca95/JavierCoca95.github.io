import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../modules/home/models/link.model';
import { Project } from '../modules/home/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getLinks() : Observable<Link[]> {
    return this.http.get<Link[]>(`assets/mocks/links.mock.json?v=` + Date.now())
  }

  getProjects() : Observable<any> {
    //const error = new HttpResponse({ status: 500})
    //return of(error) as any;
    return this.http.get<Project[]>(`assets/mocks/projects.json?v=` + Date.now());
  }
}