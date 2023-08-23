import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {
  public peliculas: Array<Pelicula>;

  constructor() {
    this.peliculas = [
      new Pelicula(
        'Spiderman 4',
        2019,
        'https://i.blogs.es/c7ed10/screenshot_90/1366_2000.jpeg'
      ),
      new Pelicula(
        'EndGame',
        2020,
        'https://img.europapress.es/fotoweb/fotonoticia_20190314153927_1200.jpg'
      ),
      new Pelicula(
        'Batman vs Superman',
        2023,
        'https://img2.rtve.es/i/?w=1600&i=1658157293020.jpg'
      ),
      new Pelicula(
        'Peaky Blinders',
        2013,
        'https://media.revistagq.com/photos/5d93360c2c50100008b21511/1:1/w_2259,h_2259,c_limit/peaky%20blinders.jpg'
      ),
    ];
  }

  getPeliculas() {
    return this.peliculas;
  }

  holaMundo() {
    return 'Hola mundo';
  }
}
