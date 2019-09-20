import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPipes';

  fecha = new Date();

  texto =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus sapiente dolorum adipisci voluptatibus quasi totam molestias deleniti quis neque voluptatem rerum ratione expedita, sunt ipsam illo nihil culpa quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.';

  libros = [
    {
      titulo: 'La Ciudad y los Perros',
      autor: 'Mario Vargas Llosa',
      sinopsis: 'Narra la historia de un cadete en la escuela militar'
    },
    {
      titulo: 'El Sexto',
      autor: 'José María Arguedas',
      sinopsis:
        'Narra la historia de un motin sangriento en la cárcel llamada El Sexto'
    },
    {
      titulo: 'El Perfume',
      autor: 'Patrick Suskind',
      sinopsis:
        'Es la historia de un asesino que mataba mujeres para robar su esencia y hacer el mejor perfume del mundo.'
    }
  ];

  busqueda = 'mario';

  //ng g p filtros      //crea un pipe llamado filtro
}
