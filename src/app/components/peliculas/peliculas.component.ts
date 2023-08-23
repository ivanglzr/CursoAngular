import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService],
})
export class PeliculasComponent implements OnInit {
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;

  constructor(private _peliculaService: PeliculaService) {
    this.peliculas = _peliculaService.getPeliculas();
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  mostrarFavorita(event: any) {
    this.favorita = event.pelicula;
  }
}
