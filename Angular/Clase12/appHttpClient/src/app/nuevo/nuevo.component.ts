import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  grupo:FormGroup 

  constructor(private activateRouter:ActivatedRoute, private alumnoService:AlumnoService, private router:Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      _id: new FormControl(),
      nombre: new FormControl(null,Validators.required),
      apellido: new FormControl(null,Validators.required),
    })


    
  }

  crear(){
    this.alumnoService.insertar(this.grupo.getRawValue())
    .subscribe(resp=>{
      this.alumnoService.onActualizar.next()
      alert("Alumno Creado!")
    })
  }

  volver(){
    this.router.navigate(["/"])
  }

}
