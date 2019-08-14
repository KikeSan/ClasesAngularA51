import { Component } from '@angular/core'
import { FormGroup,FormControl,Validators } from "@angular/forms";

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
      correo:new FormControl(null,Validators.required),
      nombre:new FormControl(),
      contrasena:new FormControl(),
      edad:new FormControl(),
    })
  }

  registrar(){
    
  }
  cargarData(){
    
  }
  cargarDataParcial(){
    
  }
}
