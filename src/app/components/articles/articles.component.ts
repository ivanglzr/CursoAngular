import { Component, Input } from '@angular/core';
// Carga el modelo del articulo
import { Article } from 'src/app/models/article';
// URL
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  @Input() articles: Article[];

  public url: string;

  constructor() {
    this.url = Global.url;
  }
}
