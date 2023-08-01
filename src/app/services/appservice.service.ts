import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../modules/home/models/link.model';
import { Project } from '../modules/home/models/project.model';
import { DeviceDetectorService} from 'ngx-device-detector';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  deviceInfo!: { isMobile: boolean; isDesktop: boolean; isTablet: boolean; };

  constructor(private http: HttpClient, private deviceService: DeviceDetectorService) {
   
  }

  getLinks() : Observable<Link[]> {
    return this.http.get<Link[]>(`assets/mocks/links.mock.json?v=` + Date.now())
  }

  getProjects() : Observable<any> {
    //const error = new HttpResponse({ status: 500})
    //return of(error) as any;
    return this.http.get<Project[]>(`assets/mocks/projects.json?v=` + Date.now());
  }

  devicetype () {
  this.deviceInfo = {
    isMobile : this.deviceService.isMobile(),
    isDesktop: this.deviceService.isDesktop(),
    isTablet: this.deviceService.isTablet(),
    };
    return this.deviceInfo;
  }
}


