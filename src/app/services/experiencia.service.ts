import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidad/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url= 'http://localhost:8080/experiencia/'

  constructor(private http: HttpClient) { }

  public list(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + 'lista');
  }

  public verExperiencia(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `ver/${id}`);
  }

  public agregarExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.url + 'crear', experiencia);
  }

  public updateExperiencia(experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.url + 'editar', experiencia);
  }

}
