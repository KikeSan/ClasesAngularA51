import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSeleccion]'
})
export class SeleccionDirective {

  @Output() onArrastrando = new EventEmitter()
  @Output() onSeleccion = new EventEmitter()

  constructor() { }

  @HostListener("dragover", ["$event"]) inicio($event){
    $event.preventDefault()
    this.onArrastrando.emit(true)  //emito un booleano para decir q estoy dentro del article
    console.log("Entró");
    
  }

  @HostListener("dragleave", ["$event"]) salir($event){
    $event.preventDefault()
    this.onArrastrando.emit(false)  //emito un booleano para decir q estoy fuera del article
  }

  @HostListener("drop", ["$event"]) seleccionar($event){
    $event.preventDefault()
    console.log($event)
    this.onSeleccion.emit($event.dataTransfer.files)
    this.onArrastrando.emit(false) 
  }

}
