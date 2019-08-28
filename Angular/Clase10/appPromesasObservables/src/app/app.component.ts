import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estado:string = ''
  personas:Promise<any[]>
  recetas:any[]
  error:any

  loguearUsuario():Promise<any>{
    if(sessionStorage.getItem("usuario")){
      console.log("No llamada al api rest");
      return Promise.resolve()
    }

    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({nombre:"devops"})
      },3000)
    })
  }

  login(){
    this.loguearUsuario()
    .then(
      data => {
        sessionStorage.setItem("usuario",JSON.stringify(data))
        console.log(data)
      }
    )
  }
}
