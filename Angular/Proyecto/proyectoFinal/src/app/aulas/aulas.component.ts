import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  @Input() aulasDisponibles:string[] = ["Aula01","Aula02","Aula03","Aula04","Aula05","Aula06","Aula07","Aula08","Aula09","Aula10",]

  constructor() { }

  ngOnInit() {
  }

}
