import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AulasComponent } from './aulas/aulas.component';
import { MostrarComponent } from './mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AulasComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
