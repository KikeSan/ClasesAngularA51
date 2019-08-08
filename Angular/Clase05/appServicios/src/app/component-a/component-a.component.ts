import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { IAlumno } from '../i-alumno';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  
  alumnos: Array<IAlumno>

  /* alumnosService: AlumnosService

  constructor(alumnosService:AlumnosService) {
    this.alumnosService = alumnosService
   } */
   constructor(private alumnosService:AlumnosService){}

  ngOnInit() {
    //this.alumnosService = new AlumnosService()
  }

  agregar(){
    //const alumno = new Alumno("Claudia","Escudero")
    const alumno = {nombre:"Claudia",apellido:"Escudero"}
    this.alumnosService.insertar(alumno)
  }

  listar(){
    this.alumnos = this.alumnosService.listar()
  }
}
