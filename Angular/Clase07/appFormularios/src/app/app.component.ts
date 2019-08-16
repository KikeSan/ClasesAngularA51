import { Component, ViewChild, ElementRef } from '@angular/core'
import { FormGroup,FormControl,Validators, AbstractControl } from "@angular/forms";
import { Validadores } from "./validadores";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("correo",{static:true}) correo: ElementRef
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

    this.group.valueChanges.subscribe(
      cambios => console.log(cambios.correo)
    )
  }

  
  registrar(){
    if(this.group.valid){
      //console.log(this.group.value);
      console.log(this.group.getRawValue());
      this.group.reset()
      this.correo.nativeElement.focus()
    }
    
    
  }
  cargarData(){
    this.group.setValue({
      correo:"kike@dev.io",
      nombre:"Kike",
      contrasena:"qwqwqwqw",
      confirmacion:"qwqwqwqw",
      edad:20
    })
    
  }
  cargarDataParcial(){
    this.group.patchValue({
      correo:"kike@dev.io",
      contrasena:"qwerty"
    })
  }
}
