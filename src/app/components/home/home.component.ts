import { Component } from '@angular/core';
// Servicio del articulo
import { ArticleService } from 'src/app/services/article.service';
// Modelo del articulo
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService],
})
export class HomeComponent {
  public articles: Article[];

  constructor(private _articleService: ArticleService) {
    // Se recogen los articulos de la DB y se guardan el variable articles
    this._articleService.getArticles(true).subscribe(
      (response) => {
        if (response.articles) {
          this.articles = response.articles;
          console.log(this.articles);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
