import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public user: any
  public campo: string

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  onSubmit(){
    console.log(this.user);
    alert("Formulario Enviado")
  }

  hasDadoClick(){
    alert("Click")
  }

  hasSalido(){
    alert("Has dado a enter")
  }
}
