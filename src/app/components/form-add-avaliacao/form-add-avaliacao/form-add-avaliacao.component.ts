import { Component } from '@angular/core';
import { Avaliacao } from '../../../models/avaliacao/avaliacao';
import { AvaliacaoService } from '../../../services/avaliacao/avaliacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-avaliacao',
  templateUrl: './form-add-avaliacao.component.html',
  styleUrl: './form-add-avaliacao.component.scss',
})
export class FormAddAvaliacaoComponent {
  avaliacao: Avaliacao = {};

  constructor(
    private avaliacaoService: AvaliacaoService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.avaliacao) {
      this.avaliacaoService.create(this.avaliacao).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/avaliacoes']);
          alert(response);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
