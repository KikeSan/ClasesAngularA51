import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditorialesRouting } from './editoriales-routing.module';

@NgModule({
  declarations: [ListadoComponent, EdicionComponent, NuevoComponent],
  imports: [
    CommonModule,
    EditorialesRouting
  ]
})
export class EditorialesModule { }
