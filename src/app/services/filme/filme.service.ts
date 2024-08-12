import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../../models/filme/filme';
import { Observable } from 'rxjs';

const filmesUrl = 'http://localhost:8080/filmes';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Filme[]> {
    return this.http.get<Filme[]>(filmesUrl);
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${filmesUrl}/${id}`, { responseType: 'text' });
  }

  create(data: Filme): Observable<string> {
    return this.http.post(`${filmesUrl}`, data, { responseType: 'text' });
  }

  update(data: Filme): Observable<string> {
    return this.http.put(`${filmesUrl}`, data, { responseType: 'text' });
  }
}
