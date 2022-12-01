import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contacto : any = [];

  anio: number = new Date().getFullYear();

  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit(): void {
    //almacenamiento de datos
    this._servicio.getData().subscribe(data => {
      //mostrar en consola
      console.log(data);
      //informaciona a mostrar
      this.contacto = data.contacto;
    })
  }

}
