import { Component, OnInit } from '@angular/core';
// Servicio del articulo
import { ArticleService } from 'src/app/services/article.service';
// Modelo del articulo
import { Article } from 'src/app/models/article';
// URL
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService],
})
export class BlogComponent implements OnInit {
  public articles: Array<Article>;
  public url: string;

  constructor(private _articleService: ArticleService) {
    this.url = Global.url;
  }

  ngOnInit() {
    // Accede al metodo getArticles para pasarselos al componente app-articles
    this._articleService.getArticles().subscribe(
      (response) => {
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
