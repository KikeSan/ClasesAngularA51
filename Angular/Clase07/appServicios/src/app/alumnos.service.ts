import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Alumno } from './alumno';
import { IAlumno } from './i-alumno';

@Injectable({
	providedIn: "root"
})

export class AlumnosService{
	private alumnos: IAlumno[] = [
		{nombre:"Jimena",apellido:"Jimenez"},
		{nombre:"Erika",apellido:"Choy"},
		{nombre:"Jeanette",apellido:"Ramos"}
]
	/* private alumnos:Array<Alumno>=[
		new Alumno("Jimena","Jimenez"),
		new Alumno("Erika","Choy"),
		new Alumno("Jeanette","Ramos")
	] */
	
	constructor(private logService: LogService){

	}

	listar():Array<IAlumno>{
		this.logService.registrar("Acción: Listar")
		return Object.assign([], this.alumnos)
	}
	insertar(alumno:IAlumno):void{
		this.logService.registrar("Acción: Registrar")
		this.alumnos.unshift(alumno)
	}
}