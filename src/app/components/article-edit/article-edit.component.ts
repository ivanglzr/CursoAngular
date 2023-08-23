import { Component, OnInit } from '@angular/core';
// Modulos del router
import { Router, ActivatedRoute, Params } from '@angular/router';
// Modelo del articulo
import { Article } from 'src/app/models/article';
// Servivio del articulo
import { ArticleService } from 'src/app/services/article.service';
// URL
import { Global } from 'src/app/services/global';
// Alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  // La vista es la del ArticleNewComponent
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService],
})
export class ArticleEditComponent implements OnInit {
  public article: Article[] | any;
  public status: string;
  public _id: string;
  public fileTmp: any;
  public is_edit: boolean;
  // Para alternar el titulo entre las dos paginas
  public page_title: string;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', '', null);
    this.is_edit = true;
    this.page_title = 'Editar articulo';
    this.url = Global.url;
  }

  ngOnInit() {
    this.getArticle();
  }

  getFile(event: any) {
    // Archivo
    const file = event.target.files[0];
    console.log(file);

    // Comprobar si la imagen existe
    if (file == undefined || file == null) {
      console.log(file);
      this.fileTmp = null;
      return console.log('comprobacion realizada');
    }

    // Añadir el archivo y el nombre
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };

    console.log(this.fileTmp);
  }

  onSubmit() {
    // Actualizar articulo
    this._articleService.update(this.article._id, this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          this._id = this.article._id;

          // Alerta
          Swal.fire(
            'Articulo editado',
            'El articulo se edito correctamente',
            'success'
          );

          console.log(this._id);
          console.log(this.article);

          this._router.navigate(['/blog/articulo/' + this._id]);

          // Si la imagen no existe finalizar la funcion
          if (this.fileTmp == null) {
            return;
          }

          // Subir imagen
          let body = new FormData();
          // body.set('file0', this.fileTmp.fileRaw);
          body.append('file0', this.fileTmp.fileRaw, this.fileTmp.fileName);

          // Acceder al servicio y al metodo upload
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

        // Alerta
        Swal.fire('Edicion fallida', 'El articulo no se pudo editar', 'error');
      }
    );
  }

  getArticle() {
    // Accede a la URL y a los params
    this._route.params.subscribe((params) => {
      let _id = params['id'];

      // Recoge el articulo de la DB mediante el id
      this._articleService.getArticle(_id).subscribe(
        (response) => {
          if (response.article) {
            // Recoge el articulo en una variable
            this.article = response.article;
          } else {
            // Si no existe se va a la home
            this._router.navigate(['/home']);
          }
        },
        (err) => {
          console.log(err);
          this._router.navigate(['/home']);
        }
      );
    });
  }
}
