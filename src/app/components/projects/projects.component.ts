import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/projectservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 //projects: Project[] = [
/*     {
      name: 'App de musica',
      description: 'App de musica similar a spotify hecha con angular. Entre sus funcionalidades se encuentran: login, registro, busqueda de canciones, reproduccion de canciones, creacion de playlist, etc.',
      skills: 'Angular, NodeJS, Angular Material, Typescript, Angular CLI, conexion y creacion de API, etc',
      icon: '../../assets/music-icon.png',
      image: '../../assets/app-music-pic.png',
      link: 'https://www.google.com',
    },
    {
      name: 'Pagina web de tienda online',
      description: 'Pagina web de una tienda online hecha con Javascript. Entre sus funcionalidades se encuentran: carrito de compras, seleccion de productos, animaciones, etc.',
      skills: 'Javascript, HTML, CSS, Bootstrap, manipulacion del DOM, funciones que implementan animaciones, etc',
      icon: '../../assets/shop-icon.png',
      image: '../../assets/shop-pic.png',
      link: 'https://www.google.com',
    },
    {
      name: 'Pagina TV',
      description: 'Pagina web similar a Netflix, donde poder encontrar peliculas y series. Entre sus funcionalidades se encuentran: filtros por genero, año, duracion, descripcion de peliculas y series, interfaz de usuario distinta para cada tipo de busqueda, etc.',
      skills: 'Javascript, HTML, CSS, Bootstrap, llamadas a API, diseño de interfaz de usuario, estructura de proyecto, etc',
      icon: '../../assets/tv-icon.png',
      image: '../../assets/tv-pic.png',
      link: 'https://www.google.com',
    },
    {
      name: 'Landing page Easybank',
      description: 'Como parte de mi aprendizaje, tome este reto de Frontend Mentor, el cual consistia en replicar una landing page de una empresa de banca online. Se otorgo un diseño de referencia y se debia replicar lo mas fielmente posible. Entre sus funcionalidades se encuentran: animaciones, responsive design, etc.',
      skills: 'HTML, CSS, Bootstrap, responsive design, metodologia de trabajo basada en diseño de interfaz de usuario, etc',
      image: '../../assets/easybank-cut.png',
      icon: '../../assets/bank-icon.png',
      link: 'https://www.google.com',
    } */
  //]
  
  projects: Project[] = [];
  constructor(private projectService: ProjectService) { }
  ngOnInit(): void {
    this.projectService.getJsonFromAssets().subscribe(res => {
      return this.projects = res;
    });
  }
}
