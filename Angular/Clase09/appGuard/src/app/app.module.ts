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

const rutas:Routes = [
  {path:'',component:LoginComponent},
  {path:'alumno', canActivateChild:[NoLogueados], children:[
    {path:'', component:ListadoAlumnoComponent},
    {path:'nuevo', component:NuevoAlumnoComponent },
    {path:'edicion', component:EdicionAlumnoComponent, canActivate:[NoAutorizados]},
  ]}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoAlumnoComponent,
    NuevoAlumnoComponent,
    EdicionAlumnoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
