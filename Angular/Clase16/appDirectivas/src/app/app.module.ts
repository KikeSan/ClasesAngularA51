import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AppDirectiva } from './app.directiva';
import { SeleccionDirective } from './seleccion.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AppDirectiva,
    SeleccionDirective  //Se tiene que declarar las directivas al igual q los componentes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
