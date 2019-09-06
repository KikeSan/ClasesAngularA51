import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable(
	{providedIn:"root"}
)
export class AutenticacionGuard implements CanActivate {
	constructor(private autenticacionService:AutenticacionService, private router:Router){}
	canActivate():boolean{
		if(!this.autenticacionService.estaLogueado()){
			this.router.navigate(['no-autenticado'])
			return false
		}
		return true
	}
}