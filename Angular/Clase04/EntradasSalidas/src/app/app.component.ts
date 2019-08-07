import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EntradasSalidas'
  nombre = 'Kike Sánchez'
  //alumnos:string[]
  alumnos:Array<string> = ['Javier','Ana','Pedro']

  constructor(){
    for (const alumno of this.alumnos) {
      console.log(alumno);
      
    }
  }

  asignar(nombreEnviado:string){
    this.nombre = nombreEnviado
  }

}
