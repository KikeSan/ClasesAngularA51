import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule  //Es necesario porque estoy exportando el menu y tiene routerLink. Sino no funciona el enlace
  ],
  exports:[
    MenuComponent
  ]
})
export class NucleoModule { }
