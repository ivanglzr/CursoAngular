import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Se cargan las variables del archivo de rutas
import { routing, appRoutingProviders } from './app.routing';
// Modulo para los formularios
import { FormsModule } from '@angular/forms';
// Es para realizar peticiones HTTP
import { HttpClientModule } from '@angular/common/http';
// Librerias para fechas
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { EsParPipe } from './pipes/espar.pipe';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    MiComponenteComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    PeliculasComponent,
    ErrorComponent,
    PeliculaComponent,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent,
    // Pipes
    EsParPipe,
  ],
  imports: [
    BrowserModule,
    MomentModule,
    routing,
    FormsModule,
    HttpClientModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
