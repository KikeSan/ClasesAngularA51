import { Resolve } from '@angular/router';
import { AlumnoService } from './alumno.service';
import { Injectable } from '@angular/core';
@Injectable({
	providedIn:'root'
})
export class AlumnoResolve implements Resolve<any>{

	constructor(private as:AlumnoService){}
	resolve(){
		const p1 = new Promise((resolve, reject)=>{
			this.as.listar().subscribe(
				data=>resolve(data)
			)
		})
		const p2 = new Promise((resolve, reject)=>{
			this.as.listarComentarios().subscribe(
				data=>resolve(data)
			)
		})
		return Promise.all([p1,p2])
		//return this.as.listar()
	}
}