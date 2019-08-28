import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  pag:number
  tam:number
  ord:string

  resultado:any
  numBotones:[]

  constructor(private usuariosService:UsuarioService, private activateRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    /* this.pag = this.activateRoute.snapshot.queryParamMap.get('pag')
    this.tam = this.activateRoute.snapshot.queryParamMap.get('tam')
    this.ord = this.activateRoute.snapshot.queryParamMap.get('ord') */
    
    this.activateRoute.queryParamMap.subscribe((data:any)=>{
      this.pag = +data.params.pag
      this.tam = +data.params.tam
      this.ord = data.params.ord

      this.listar()
    })
    
    //this.genPagination()
  }
  listar(){
    this.resultado = this.usuariosService.listado(this.pag,this.tam,this.ord)
    //console.log('Service result:' ,this.usuariosService.listado(this.pag,this.tam,this.ord));
    
  }

  editar(){
    this.router.navigate(["edicion",20],{relativeTo: this.activateRoute, queryParamsHandling:"merge"})
    /* this.router.navigate(["/usuario","edicion",20],{queryParamsHandling:"merge"}) */
    /* this.router.navigate([{outlets:{inferior:["/usuario","edicion",20]}}],{queryParamsHandling:"merge"}) */
  }

  genPagination(){
    
    this.numBotones = this.usuariosService.genPag(this.pag)
  }

  cambiarPagina(pag:number){
    /* this.router.navigate(["/usuario","listado"],{queryParams:{pag,tam:this.tam,ord:this.ord}}) */
    this.router.navigate(["/usuario","listado"],{queryParams:{pag,rol:"administrador"},fragment:"admin",queryParamsHandling:"merge"})

  }



}
