import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades : any = [];

  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
    //almacenamiento de datos
    this._servicio.getData().subscribe(data => {
      //mostrar en consola
      console.log(data);
      //informaciona a mostrar
      this.habilidades = data.habilidades;
    })
  }

}
