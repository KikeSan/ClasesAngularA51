import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    const data = this.activateRoute.snapshot.data.listaAlumnos
    console.log('data',data);
    
  }

}
