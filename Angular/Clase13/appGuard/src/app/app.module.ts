import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { EdicionAlumnoComponent } from './edicion-alumno/edicion-alumno.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { AutorizacionGuard } from './guards/autorizacion.guard';
import { NoAutorizados } from './guards/noautorizados.guard';
import { NoLogueados } from './guards/nologueados.guard';
import {ReactiveFormsModule} from '@angular/forms';
import { NoAutenticadoComponent } from './no-autenticado/no-autenticado.component';
import { DatosNoGuardadosGuard } from './guards/datos-no-guardados.guard';
import { AlumnoResolve } from './servicios/alumno.resolve';

const rutas:Routes = [
  {path:'',component:LoginComponent},
  {path:'alumno', canActivateChild:[NoLogueados], children:[
    {path:'', component:ListadoAlumnoComponent, resolve:{listaAlumnos:AlumnoResolve}},
    {path:'nuevo', component:NuevoAlumnoComponent, canDeactivate:[DatosNoGuardadosGuard] },
    {path:'edicion', component:EdicionAlumnoComponent, canActivate:[NoAutorizados]},
  ]},
  {path:'no-autenticado',component:NoAutenticadoComponent},
  {path:'**',component:NoAutenticadoComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoAlumnoComponent,
    NuevoAlumnoComponent,
    EdicionAlumnoComponent,
    NoAutenticadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
