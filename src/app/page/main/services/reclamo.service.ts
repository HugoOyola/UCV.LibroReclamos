// reclamos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamo } from '../../../page/main/interface/reclamo';

@Injectable({
  providedIn: 'root',
})
export class ReclamosService {
  private apiUrl = 'http://localhost/Api_LibroReclamos/api/Reclamaciones/Monitoreo';

  constructor(private http: HttpClient) {}

  getReclamos(filtro: any): Observable<{ lstItem: Reclamo[] }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ lstItem: Reclamo[] }>(this.apiUrl, filtro, { headers });
  }
}
