import { Component, OnInit } from '@angular/core';
import { AvaliacaoService } from '../../../services/avaliacao/avaliacao.service';
import { Avaliacao } from '../../../models/avaliacao/avaliacao';

@Component({
  selector: 'app-list-avaliacoes',
  templateUrl: './list-avaliacoes.component.html',
  styleUrl: './list-avaliacoes.component.scss',
})
export class ListAvaliacoesComponent implements OnInit {
  avaliacoes?: Avaliacao[];
  avaliacaoSelecionado: Avaliacao = {};
  formularioExcluir = false;
  formularioEditar = false;

  constructor(private avaliacaoService: AvaliacaoService) {}

  ngOnInit(): void {
    this.receberListaAvaliacoes();
  }

  receberListaAvaliacoes() {
    this.avaliacaoService.getAll().subscribe({
      next: (data) => {
        this.avaliacoes = data;
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  selecionarParaApagar(avaliacao: Avaliacao) {
    this.avaliacaoSelecionado = avaliacao;
    this.formularioExcluir = true;
  }

  selecionarParaEditar(avaliacao: Avaliacao) {
    this.avaliacaoSelecionado = avaliacao;
    this.formularioEditar = true;
  }

  excluirAvaliacao(avaliacao: Avaliacao) {
    if (avaliacao.id != undefined) {
      this.avaliacaoService.delete(avaliacao.id).subscribe({
        next: (response) => {
          console.log(response);
          this.receberListaAvaliacoes();
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

  onSubmit(avaliacao: Avaliacao) {
    this.avaliacaoService.update(avaliacao).subscribe({
      next: (response) => {
        console.log(response);
        this.formularioEditar = false;
        alert(response);
      },
    });
  }
}
