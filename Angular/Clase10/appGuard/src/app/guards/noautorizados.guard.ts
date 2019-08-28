import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
	providedIn:"root"
})
export class NoAutorizados implements CanActivate {
	canActivate():boolean{
		return false
	}
}