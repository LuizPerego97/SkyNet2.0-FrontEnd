import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListFilmesComponent } from './components/list-filmes/list-filmes/list-filmes.component';
import { FormAddFilmeComponent } from './components/form-add-filme/form-add-filme/form-add-filme.component';
import { FormAddAvaliacaoComponent } from './components/form-add-avaliacao/form-add-avaliacao/form-add-avaliacao.component';
import { ListAvaliacoesComponent } from './components/list-avaliacoes/list-avaliacoes/list-avaliacoes.component';

@NgModule({
  declarations: [AppComponent, ListFilmesComponent, FormAddFilmeComponent, FormAddAvaliacaoComponent, ListAvaliacoesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
