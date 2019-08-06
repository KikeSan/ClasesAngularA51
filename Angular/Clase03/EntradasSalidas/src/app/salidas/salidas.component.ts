import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit {

  @Output() onUpdate = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.onUpdate.emit("Gladys Tejeda")
    },3000)
  }

  cambiarNombre(){
    this.onUpdate.emit("Cristian Pacheco")
  }

}
