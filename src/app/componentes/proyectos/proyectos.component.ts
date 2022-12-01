import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos : any = [];

  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
     //almacenamiento de datos
     this._servicio.getData().subscribe(data => {
      //mostrar en consola
      console.log(data);
      //informaciona a mostrar
      this.proyectos = data.proyectos;
    })
  }

}
