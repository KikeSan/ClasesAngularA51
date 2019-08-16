import { FormGroup,FormControl,Validators, AbstractControl } from "@angular/forms";
export class Validadores{
	
	static validadorCorreoEmpresarial(control:FormControl):{[s:string]:boolean}{
		const listaCorreosGratuitos = ["gmail.com","yahoo.com","hotmail.com","outlook.com"]

		if(control && control.value){
		  const valor = control.value
		  const partes = valor.split('@')
		  if (partes.length!=2) return null
	
		  if(listaCorreosGratuitos.indexOf(partes[1]) == -1) return null
	
		  return {correoGratuito:true}
		}
		
		return null
	  }

	//FormControl hereda de AbstractControl y AbstractControl se pueden usar los parent
	static validarConfirmacion(control:AbstractControl):{[s:string]:boolean}{
		if(!control || !control.parent) return null
	
		const contrasena = control.parent.get('contrasena')
		const confirmacion = control.parent.get('confirmacion')
	
		if(!contrasena || !confirmacion) return null
	
		if(contrasena.value == '') return null
	
		if(contrasena.value != confirmacion.value) return {contrasenaNoCoincide:true}
	
		return null
	
	  }

	  static miFuncion(min,max){
		const validatorEdad = (control:FormControl):{[s:string]:boolean}=>{
		  if(control && control.value){
			if(control.value>=min && control.value<=max) return null
			return {fueraDeRango:true}
		  }
		}
		return validatorEdad
	  }
}