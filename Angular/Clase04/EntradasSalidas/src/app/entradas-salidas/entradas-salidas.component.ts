import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entradas-salidas',
  templateUrl: './entradas-salidas.component.html',
  styleUrls: ['./entradas-salidas.component.css']
})
export class EntradasSalidasComponent implements OnInit {

  @Input("fullname") nombreCompleto:string = 'Carmen'
  @Input("index") indiceDelArray:number

  constructor() { }

  ngOnInit() {
  }

}
