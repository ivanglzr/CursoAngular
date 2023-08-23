import { Component } from '@angular/core';
// Modulos del router
import { Router, ActivatedRoute, Params } from '@angular/router';
// Modelo del articulo
import { Article } from 'src/app/models/article';
// Servicio del articulo
import { ArticleService } from 'src/app/services/article.service';
// URL
import { Global } from 'src/app/services/global';
// Alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService],
})
export class ArticleNewComponent {
  public article: Article[] | any;
  public status: string;
  public _id: string;
  public fileTmp: any;
  // page_title cambia dependiendo del componente
  public page_title: string;
  // is_edit cambia dependiendo del componente
  public is_edit: boolean;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', '', null);
    this.page_title = 'Crear articulo';
    this.is_edit = false;
    this.url = Global.url;
  }

  getFile(event: any) {
    // Recoger archivo
    const file = event.target.files[0];
    console.log(file);

    // Comprobar si existe
    if (file == undefined || file == null) {
      console.log(file);
      this.fileTmp = null;
      return console.log('comprobacion realizada');
    }

    // Si existe guardarlo
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };

    console.log(this.fileTmp);
  }

  onSubmit() {
    // Crear articulo
    this._articleService.create(this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          this._id = this.article._id;

          // Alerta
          Swal.fire(
            'Articulo creado',
            'Articulo creado de manera correcta',
            'success'
          );

          console.log(this._id);
          console.log(this.article);

          this._router.navigate(['/blog']);

          // Si no existe la imagen finalizar la funcion
          if (this.fileTmp == null) {
            return;
          }

          // Subir imagen
          let body = new FormData();
          // body.set('file0', this.fileTmp.fileRaw);
          body.append('file0', this.fileTmp.fileRaw, this.fileTmp.fileName);

          this._articleService
            .upload(body, this._id)
            .subscribe((res) => console.log(res));

          //? Otra forma de subir la imagen
          // const request = new XMLHttpRequest();
          // request.open('POST', Global.url + 'upload-image/' + this._id);
          // request.send(body);
          // console.log(body);
        } else {
          this.status = 'error';
        }
      },
      (err) => {
        console.log(err);
        this.status = 'error';
      }
    );

    // this._articleService
    //   .upload(body, this._id)
    //   .subscribe((res) => console.log(res));
  }
}
