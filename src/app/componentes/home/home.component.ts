import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  banner : any = [];
  presentacion : any = [];
  educacion : any = [];
  experiencia : any = [];
  habilidades : any = [];
  proyectos : any = [];
  contacto : any = [];

  anio: number = new Date().getFullYear();

  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
    //almacenamiento de datos
    this._servicio.getData().subscribe(data => {
      //mostrar en consola
      console.log(data);
      //informaciona a mostrar
      this.banner = data.banner;
      this.presentacion = data.presentacion;
      this.educacion = data.educacion;
      this.experiencia = data.experiencia;
      this.habilidades = data.habilidades;
      this.proyectos = data.proyectos;
      this.contacto = data.contacto;
    })
  }

}
