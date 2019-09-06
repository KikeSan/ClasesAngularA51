import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Injector, Injectable } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
@Injectable({
	providedIn:"root"
})
export class NoLogueados implements CanActivateChild {
	constructor(private as:AutenticacionService, private router:Router){}
	canActivateChild():boolean{
		//return this.as.estaLogueado()
		if(!this.as.estaLogueado()){
			this.router.navigate(['no-autenticado'])
			return false
		}
		return true
	}
}