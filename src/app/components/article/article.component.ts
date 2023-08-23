import { Component, OnInit } from '@angular/core';
// Modulos del router
import { Router, ActivatedRoute, Params } from '@angular/router';
// URL
import { Global } from 'src/app/services/global';
// Servicio del articulo
import { ArticleService } from 'src/app/services/article.service';
// Modelo del articulo
import { Article } from 'src/app/models/article';
// Alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  public article: Article[] | any;
  public url: string;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    // Accede a la URL y a los params
    this._route.params.subscribe((params) => {
      let id = params['id'];

      // Consigue el articulo por el id
      this._articleService.getArticle(id).subscribe(
        (response) => {
          if (response.article) {
            this.article = response.article;
            console.log(this.article);
          } else {
            this._router.navigate(['/home']);
          }
        },
        (err) => {
          this._router.navigate(['/home']);
          console.log(err);
        }
      );
    });
  }

  delete(_id: string) {
    // Alerta para asegurar si se quiere eliminar el articulo
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-success',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Estas seguro?',
        text: 'Si lo eliminas no se podra revertir',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // Accede al metodo delete
          this._articleService.delete(_id).subscribe(
            (response) => {
              this._router.navigate(['/blog']);
            },
            (err) => {
              console.log(err);
              this._router.navigate(['/blog']);
            }
          );

          swalWithBootstrapButtons.fire(
            'Articulo borrado',
            'El articulo ha sido borrado',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Articulo guardado',
            'El articulo no se ha eliminado',
            'error'
          );
        }
      });
  }
}
