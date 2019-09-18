import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { LibrosRouting } from './libros-routing.module';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [ListadoComponent, EdicionComponent, NuevoComponent],
  imports: [
    CommonModule,
    LibrosRouting,
    CompartidoModule   // En compartido exporté el reducidorPipe y aquí importo todo el modulo
  ]
})
export class LibrosModule { }
