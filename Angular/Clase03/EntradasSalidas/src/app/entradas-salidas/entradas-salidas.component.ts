import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entradas-salidas',
  templateUrl: './entradas-salidas.component.html',
  styleUrls: ['./entradas-salidas.component.css']
})
export class EntradasSalidasComponent implements OnInit {

  @Input() nombreCompleto:string = 'Carmen'
  @Input() indiceDelArray:number

  constructor() { }

  ngOnInit() {
  }

}
