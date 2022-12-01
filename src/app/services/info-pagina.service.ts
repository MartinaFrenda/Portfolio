import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};

  constructor( private http: HttpClient) {
   console.log("el servicio funciona");
   }

  getData():Observable<any> {
  return this.http.get('./assets/data/data-pagina.json');
}

  }
