import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appModulizacion';

  ruta:string = ""

  constructor(){
    this.ruta = environment.rutaApi    //traigo la variable creada en el archivo environment.ts
  }
}
