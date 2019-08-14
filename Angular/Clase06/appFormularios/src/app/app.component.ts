import { Component } from '@angular/core'
import { FormGroup,FormControl,Validators, AbstractControl } from "@angular/forms";
import { Validadores } from "./validadores";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  group:FormGroup


  constructor(){}

  ngOnInit(){
    this.group = new FormGroup({
      correo:new FormControl(null,[Validators.required,Validators.email, Validadores.validadorCorreoEmpresarial]),
      nombre:new FormControl('Kike',Validators.required),
      contrasena:new FormControl(null,[Validators.required, Validators.pattern(/^[a-zA-Z]\w{6,15}$/i)]),
      confirmacion:new FormControl(null,Validadores.validarConfirmacion),
      edad:new FormControl(null,[Validators.required, Validadores.miFuncion(18,30)]),
    })
  }

  

  
  

  registrar(){
    
  }
  cargarData(){
    
  }
  cargarDataParcial(){
    
  }
}
