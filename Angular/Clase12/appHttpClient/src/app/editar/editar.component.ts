import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../alumno.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  _id:string
  grupo:FormGroup

  constructor(private activateRoute:ActivatedRoute, private alumnoService:AlumnoService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      _id: new FormControl(), //se declaro pero no se usa en el HTML
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
    })

    //this._id = this.activateRoute.snapshot.paramMap.get("_id")
    //Necesitamos un observador sino solo se ejecuta una vez
    this.activateRoute.paramMap.subscribe(
      (data:any) =>{
        this._id = data.params._id

        this.alumnoService.detallar(this._id)
          .subscribe(
            resp => this.grupo.patchValue(resp)
          )
      }
    )

    
  }

  actualizar(){
    this.alumnoService.modificar(this.grupo.getRawValue())
    .subscribe(resp=>{
      this.alumnoService.onActualizar.next()
      alert("Alumno Actualizado!")
    })
  }

}
