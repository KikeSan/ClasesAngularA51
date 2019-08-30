import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  suscription: Subscription
  valor:Observable<number>
  constructor() { }

  ngOnInit() {
    this.valor = interval(500)
    /* this.suscription = interval(500)
    .subscribe(data=>console.log('Valor',data)) */
  }

  ngOnDestroy(){
    //this.suscription.unsubscribe()
  }
}
