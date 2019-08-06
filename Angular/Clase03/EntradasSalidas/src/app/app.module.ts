import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntradasSalidasComponent } from './entradas-salidas/entradas-salidas.component';
import { SalidasComponent } from './salidas/salidas.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradasSalidasComponent,
    SalidasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
