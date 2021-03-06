import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EdicionComponent } from './edicion/edicion.component';

const routes:Routes = [
	{path:"editoriales",children:[
		{path:"",component:ListadoComponent},
		{path:"nuevo",component:NuevoComponent},
		{path:"edicion",component:EdicionComponent},
	]}
] 

@NgModule({
	imports:[
		RouterModule.forRoot(routes)
	]
})

export class EditorialesRouting {
	
}