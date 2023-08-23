import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent {
  @Input() pelicula: Pelicula;
  @Output() favorita = new EventEmitter();

  seleccionar(event: any, pelicula: Pelicula) {
    this.favorita.emit({
      pelicula: pelicula,
    });
  }
}
