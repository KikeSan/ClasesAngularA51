import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';

//const rutas:Route[]
const rutas:Routes = [
  {path:'',component:LoginComponent},
  {path:'cursos', children:[
    {path:'listado/:id',component:ListadoCursosComponent}
  ]},
  {path:'usuario', children:[
    {path:'register', component:RegistroComponent},
    {path:'listado', component:ListadoComponent},
    {path:'edicion/:id', component:EdicionComponent},
  ]},
  
  
  /* {path:'**', component:NoEncontradoComponent} */
  {path:'**', redirectTo:''},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ListadoComponent,
    EdicionComponent,
    NoEncontradoComponent,
    ListadoCursosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
