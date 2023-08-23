import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css'],
})
export class MiComponenteComponent {
  public mostrar: boolean;
  public title: string;

  constructor() {
    this.mostrar = true;
    this.title = 'Titulo';
  }

  ocultar() {
    this.mostrar = false;
  }

  cambiar() {
    this.title = 'Titulo cambiado';
  }
}
