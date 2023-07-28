import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { Project } from '../models/project.model';
import { Link } from '../models/link.model';
import { catchError } from 'rxjs';

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