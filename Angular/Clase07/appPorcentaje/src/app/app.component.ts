import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPorcentaje';

  group:FormGroup

  total:number

  constructor(){}

  ngOnInit(){
    this.group = new FormGroup({
      lebel: new FormControl(null,Validators.required),
      cyzone: new FormControl(null,Validators.required),
      esika: new FormControl(null,Validators.required)
    })

    this.group.valueChanges.subscribe(
      cambios => {
        console.log(cambios.lebel+cambios.cyzone+cambios.esika)
        this.total = cambios.lebel+cambios.cyzone+cambios.esika
      }
    )
  }
}
