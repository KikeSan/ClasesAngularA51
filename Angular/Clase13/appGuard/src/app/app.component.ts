import { Component } from '@angular/core';
import { AutenticacionService } from './servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appGuard';

  logueado:boolean = false

  constructor(private autenticacionServicio:AutenticacionService){}

  ngOnInit(){
    this.logueado = this.autenticacionServicio.estaLogueado()

    this.autenticacionServicio.onCambioEstado.subscribe(
      estado => this.logueado = estado
    )
  }

  logout(){
    this.autenticacionServicio.logout()
  }
}
