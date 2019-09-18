import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { LoginComponent } from './nucleo/login/login.component';
import { HomeComponent } from './nucleo/home/home.component';

const routes:Routes = [
	{path:"",component:LoginComponent},
	{path:"home",component:HomeComponent},
	/* {path:"libros",loadChildren:"./libros/libros.module#LibrosModule"}  *///especifica que esto lo cargue despuès a demanda, y se quita la importacion del app.module

	{path:"libros", loadChildren:()=>import("./libros/libros.module").then(mod=>mod.LibrosModule)}
] 

@NgModule({
	imports:[
		RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules}), //preloadingStrategy hace que los demas modulos carguen en los temporales despues de que ya cargó lo principal y se renderizó en el dom
	],
	exports:[RouterModule]
})
export class AppRouting {
	
}