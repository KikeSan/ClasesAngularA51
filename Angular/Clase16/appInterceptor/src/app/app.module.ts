import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    //Suplantamos la clase misma por la clase interceptor
    //multi:true sirve para especificar que se van a usar varios interceptores
    {provide: HTTP_INTERCEPTORS,useClass:AppInterceptor, multi:true} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
