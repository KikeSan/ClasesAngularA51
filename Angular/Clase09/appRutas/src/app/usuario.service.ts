import { Injectable } from '@angular/core';

@Injectable({
	providedIn: "root"
})
export class UsuarioService{
	private personas = [
		{ nombre: "Nombre 01", apellido: "Apellido 16" },
		{ nombre: "Nombre 02", apellido: "Apellido 15" },
		{ nombre: "Nombre 03", apellido: "Apellido 14" },
		{ nombre: "Nombre 04", apellido: "Apellido 13" },
		{ nombre: "Nombre 05", apellido: "Apellido 12" },
		{ nombre: "Nombre 06", apellido: "Apellido 11" },
		{ nombre: "Nombre 07", apellido: "Apellido 10" },
		{ nombre: "Nombre 08", apellido: "Apellido 09" },
		{ nombre: "Nombre 09", apellido: "Apellido 08" },
		{ nombre: "Nombre 10", apellido: "Apellido 07" },
		{ nombre: "Nombre 11", apellido: "Apellido 06" },
		{ nombre: "Nombre 12", apellido: "Apellido 05" },
		{ nombre: "Nombre 13", apellido: "Apellido 04" },
		{ nombre: "Nombre 14", apellido: "Apellido 03" },
		{ nombre: "Nombre 15", apellido: "Apellido 02" },
		{ nombre: "Nombre 16", apellido: "Apellido 01" }
	]
	constructor(){}

	listado(pag,tam,ord){
		console.log(`${pag} ${tam} ${ord}`);
		console.log(this.personas);
		return this.personas
		.sort((a, b) => a[ord] > b[ord] ? 1 : -1)
		.slice((pag - 1) * tam, (pag - 1) * tam + tam)
	}

	genPag(numPag){
		console.log('Numero de paginas',numPag);
		let numeros:any
		for (let index = 0; index < numPag; index++) {
			numeros.push(index)
		}
		return numeros
	}
}