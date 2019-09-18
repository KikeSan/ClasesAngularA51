import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {RouterModule, Routes} from '@angular/router'
import { ListadoComponent as ListadoLibrosComponent } from './libros/listado/listado.component';
import { LibrosModule } from './libros/libros.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const rutas:Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},

  {path:'libros', children:[
    {path:'', component:ListadoLibrosComponent},
  ]},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    LibrosModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
