import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  banner : any = [];

  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit(): void {
    //almacenamiento de datos
    this._servicio.getData().subscribe(data => {
      //mostrar en consola
      console.log(data);
      //informaciona a mostrar
      this.banner = data.banner;
    })
  }

}
