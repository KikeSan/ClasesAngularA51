import { CanActivate, CanActivateChild } from '@angular/router';
import { Injector, Injectable } from '@angular/core';
@Injectable({
	providedIn:"root"
})
export class NoLogueados implements CanActivateChild {
	canActivateChild():boolean{
		return true
	}
}