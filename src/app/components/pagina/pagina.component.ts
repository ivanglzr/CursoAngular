import { Component, OnInit } from '@angular/core';
// Modulos del router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
})
export class PaginaComponent implements OnInit {
  public nombre: string;
  public apellidos: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.nombre = '';
    this.apellidos = '';
  }

  ngOnInit() {
    // Se recogen los params de la URL
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.nombre = params['nombre'];
      this.apellidos = params['apellidos'];
    });
  }

  redireccion() {
    // Se redirije y se añaden los parametros
    this._router.navigate(['/pagina-de-pruebas', 'Ivan', 'Gonzalez']);
  }
}
