import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {
  id
  titulo
  lista
  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.lista = this.activatedRouter.snapshot.fragment
    this.activatedRouter.paramMap.subscribe((data:any)=>{
      this.id = data.params.id
    })
    this.titulo = this.activatedRouter.snapshot.queryParamMap.get('titulo')
  }

}
