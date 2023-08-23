import { Component, OnInit } from '@angular/core';
// Modulos del router
import { Router, ActivatedRoute, Params } from '@angular/router';
// Modelo del articulo
import { Article } from 'src/app/models/article';
// Servicio del articulo
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService],
})
export class SearchComponent implements OnInit {
  public articles: Article[];
  public search: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {}

  ngOnInit() {
    // Recogen los params de la URL
    this._route.params.subscribe((params) => {
      let search = params['search'];
      this.search = search;

      // Accede al metodo search y recoge solo los articulos que contienen el parametro search
      this._articleService.search(search).subscribe(
        (response) => {
          if (response.article) {
            this.articles = response.article;
            console.log(this.articles);
          }
        },
        (err) => {
          console.log(err);
          this.articles = [];
        }
      );
    });
  }
}
