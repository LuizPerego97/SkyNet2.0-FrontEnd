import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avaliacao } from '../../models/avaliacao/avaliacao';
import { Observable } from 'rxjs';

const avaliacoesUrl = 'http://localhost:8080/avaliacoes';

@Injectable({
  providedIn: 'root',
})
export class AvaliacaoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(avaliacoesUrl);
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${avaliacoesUrl}/${id}`, { responseType: 'text' });
  }

  create(data: Avaliacao): Observable<string> {
    return this.http.post(`${avaliacoesUrl}`, data, { responseType: 'text' });
  }

  update(data: Avaliacao): Observable<string> {
    return this.http.put(`${avaliacoesUrl}`, data, { responseType: 'text' });
  }
}
