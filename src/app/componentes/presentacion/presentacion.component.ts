import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  presentacion : any = [];

  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
     //almacenamiento de datos
     this._servicio.getData().subscribe(data => {
      //mostrar en consola
      console.log(data);
      //informaciona a mostrar
      this.presentacion = data.presentacion;
    })
  }
  }
