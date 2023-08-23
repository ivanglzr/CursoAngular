// Para cargar el servicio
import { Injectable } from '@angular/core';
// Para hacer peticiones HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';
// El tipo de dato que devuelve la funcion
import { Observable } from 'rxjs';
// Modelo del articulo
import { Article } from '../models/article';
// URL
import { Global } from './global';

@Injectable()
export class ArticleService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  pruebas() {
    return 'articleservice';
  }

  getArticles(last: any = null): Observable<any> {
    let articles = 'articles';

    // Si se pasa un parametro por la URL se devuelven solo 5 articulos
    if (last != null) {
      articles = 'articles/true';
    }

    // Devuelve los articulos
    return this._http.get(this.url + articles);
  }

  getArticle(articleId: string): Observable<any> {
    // Se recoge un unico articulo con el id
    return this._http.get(this.url + 'article/' + articleId);
  }

  search(searchString: string): Observable<any> {
    // Se devuelven los articulos que contienen la searchString
    return this._http.get(this.url + 'search/' + searchString);
  }

  create(article: Article[]): Observable<any> {
    // Se vuelve un string el articulo
    let params = JSON.stringify(article);
    // Se crean unos headers para indicar el tipo de contenido
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Se guarda el articulo
    return this._http.post(this.url + 'save', params, { headers: headers });
  }

  upload(body: FormData, _id: string): Observable<any> {
    // Se sube una imagen al articulo mediante el id
    return this._http.post(this.url + 'upload-image/' + _id, body);
  }

  update(_id: string, article: Article[]): Observable<any> {
    // Se vuelve un string el articulo
    let params = JSON.stringify(article);
    // Se crean unos headers para indicar el tipo de contenido
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Se actualiza el articulo
    return this._http.put(this.url + 'article/' + _id, params, {
      headers: headers,
    });
  }

  delete(_id: string): Observable<any> {
    // Se crean unos headers para indicar el tipo de contenido
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Se accede al articulo para eliminarlo
    return this._http.delete(this.url + 'article/' + _id, { headers: headers });
  }
}
