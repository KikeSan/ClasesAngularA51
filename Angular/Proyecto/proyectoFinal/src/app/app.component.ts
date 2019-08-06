import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logueado: boolean = false

  aulasDisponibles:string[] = ["Aula01","Aula02","Aula03","Aula04","Aula05","Aula06","Aula07","Aula08","Aula09","Aula10",]

  ingresar(estado) {
    this.logueado = estado
  }
}