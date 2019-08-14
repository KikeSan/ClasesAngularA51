export class Alumno {
	/* nombre:string
	apellido:string

	constructor(nombre:string, apellido:string){
		this.nombre = nombre
		this.apellido = apellido
	} */
	constructor(private nombre:string, private apellido:string){}

	obtenerNombreCompleto():string{
		//return this.nombre +' '+ this.apellido
		return `${this.nombre} ${this.apellido}`
	}
}
