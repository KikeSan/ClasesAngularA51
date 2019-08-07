import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { IAlumno } from '../i-alumno';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  alumnos:IAlumno[]
  AlumnosService:AlumnosService

  constructor(alumnosService:AlumnosService) { 
    this.AlumnosService = alumnosService
  }

  ngOnInit() {
    //this.obj = new AlumnosService()
  }

  listar(){
    this.alumnos = this.AlumnosService.listar()
  }
}
