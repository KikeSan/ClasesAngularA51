import { Component } from '@angular/core';

//definimos el forEach para el tiop FileList que se usa más abajo
FileList.prototype['forEach'] = function(callback) {
  //con prototype accedes a la clase
  [].forEach.call(this, callback);
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appDirectivas';
  brown = 'pink';

  seleccion: boolean = false;
  imagenSeleccionada: Array<any> = [];

  archivosSeleccionados(imagenes: FileList) {
    imagenes['forEach'](imagen => {
      if (imagen.type.startsWith('image/')) {
        const fr: FileReader = new FileReader();
        fr.onloadend = e => {
          //casteo en typescript para definir el tipo de target y no muestre error en el result
          const dataImagen = (e.target as FileReader).result;
          this.imagenSeleccionada.push(dataImagen);
        };
        fr.readAsDataURL(imagen);
      }
    });
  }
}
