import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getJsonFromAssets() : Observable<any>  {
    return this.http.get<any>(`assets/mocks/projects.json?v=` + Date.now());
  }
}