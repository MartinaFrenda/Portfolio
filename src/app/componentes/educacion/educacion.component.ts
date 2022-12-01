import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion : any = [];

  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
     //almacenamiento de datos
     this._servicio.getData().subscribe(data => {
      //mostrar en consola
      console.log(data);
      //informaciona a mostrar
      this.educacion = data.educacion;
    })
  }

}
