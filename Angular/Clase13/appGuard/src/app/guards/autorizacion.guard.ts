import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable({
	providedIn:"root"
})
export class AutorizacionGuard implements CanActivateChild{
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