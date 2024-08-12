import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilmesComponent } from './components/list-filmes/list-filmes/list-filmes.component';
import { FormAddFilmeComponent } from './components/form-add-filme/form-add-filme/form-add-filme.component';
import { ListAvaliacoesComponent } from './components/list-avaliacoes/list-avaliacoes/list-avaliacoes.component';
import { FormAddAvaliacaoComponent } from './components/form-add-avaliacao/form-add-avaliacao/form-add-avaliacao.component';

const routes: Routes = [
  { path: 'filmes', component: ListFilmesComponent },
  { path: 'addFilme', component: FormAddFilmeComponent },
  { path: 'avaliacoes', component: ListAvaliacoesComponent },
  { path: 'addAvaliacao', component: FormAddAvaliacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
