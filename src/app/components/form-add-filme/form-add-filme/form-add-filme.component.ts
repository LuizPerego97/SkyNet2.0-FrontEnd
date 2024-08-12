import { Component } from '@angular/core';
import { FilmeService } from '../../../services/filme/filme.service';
import { Filme } from '../../../models/filme/filme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-filme',
  templateUrl: './form-add-filme.component.html',
  styleUrl: './form-add-filme.component.scss',
})
export class FormAddFilmeComponent {
  filme: Filme = {};

  constructor(private filmeService: FilmeService, private router: Router) {}

  onSubmit() {
    if (this.filme) {
      this.filmeService.create(this.filme).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/filmes']);
          alert(response);
        },
        error: (err) => {
          console.error('Erro ao salvar o filme:', err);
          // Adicione tratamento de erro se necessário
        },
      });
    }
  }
}
