import { Injectable } from '@angular/core';

@Injectable({
	providedIn: "root"
})
export class LogService{
	registrar(mensaje:string){
		console.log(mensaje);
	}
}