import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EdicionComponent } from './edicion/edicion.component';

const routes:Routes = [
	//{path:"libros",children:[ // se quita el padre porque se esta usando forChild
		{path:"",component:ListadoComponent},
		{path:"nuevo",component:NuevoComponent},
		{path:"edicion",component:EdicionComponent},
	//]}
] 

@NgModule({
	imports:[
		RouterModule.forChild(routes)  //se usa forChild para carga bajo demanda
	]
})

export class LibrosRouting {
	
}