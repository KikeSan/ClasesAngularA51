import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { pluck } from "rxjs/operators";
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  onActualizar: Subject<any> = new Subject()     //Subject actua como observable y como observador

  constructor(private http:HttpClient) { }

  listar():Observable<Alumno[]>{
    return this.http.get<Alumno>("http://clase.tibajodemanda.com/alumno").pipe(pluck("results"))
  }
  detallar(_id:string):Observable<Alumno>{
    return this.http.get<Alumno>(`http://clase.tibajodemanda.com/alumno/${_id}`).pipe(pluck("result"))
  }
  insertar(){}
  
  modificar(alumno:Alumno):Observable<any>{
    return this.http.put(`http://clase.tibajodemanda.com/alumno/${alumno._id}`,alumno)
  }

  eliminar(){}

}
