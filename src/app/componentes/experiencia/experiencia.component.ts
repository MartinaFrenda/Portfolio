import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidad/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias : Experiencia[]=[];

  constructor(private sExperiencia: ExperienciaService) { }

  ngOnInit(): void {
     //almacenamiento de datos
     this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.sExperiencia.list().subscribe(data => {this.experiencias=data});
  }

}
