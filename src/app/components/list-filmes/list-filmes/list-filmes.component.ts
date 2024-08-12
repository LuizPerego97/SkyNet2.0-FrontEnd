import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../../services/filme/filme.service';
import { Filme } from '../../../models/filme/filme';

@Component({
  selector: 'app-list-filmes',
  templateUrl: './list-filmes.component.html',
  styleUrl: './list-filmes.component.scss',
})
export class ListFilmesComponent implements OnInit {
  filmes?: Filme[];
  filmeSelecionado: Filme = {};
  formularioEditar = false;
  formularioExcluir = false;

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.receberListaFilmes();
  }

  receberListaFilmes() {
    this.filmeService.getAll().subscribe({
      next: (data) => {
        this.filmes = data;
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  selecionarParaApagar(filme: Filme) {
    this.filmeSelecionado = filme;
    this.formularioExcluir = true;
  }

  selecionarParaEditar(filme: Filme) {
    this.filmeSelecionado = filme;
    this.formularioEditar = true;
  }

  excluirFilme(filme: Filme) {
    if (filme.id != undefined) {
      this.filmeService.delete(filme.id).subscribe({
        next: (response) => {
          console.log(response);
          this.receberListaFilmes();
          alert(response);
          this.formularioExcluir = false;
        },
        error: (e) => {
          console.log(e);
          this.formularioExcluir = false;
        },
      });
    }
  }

  cancelar() {
    this.formularioExcluir = false;
    this.formularioEditar = false;
  }

  onSubmit(filme: Filme) {
    this.filmeService.update(filme).subscribe({
      next: (response) => {
        console.log(response);
        this.formularioEditar = false;
        alert(response);
      },
    });
  }
}
