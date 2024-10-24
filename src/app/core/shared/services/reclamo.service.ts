import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamo } from '../../../page/main/interface/reclamo';

@Injectable({
  providedIn: 'root',
})
export class ReclamosService {
  private apiUrl = 'http://localhost/Api_LibroReclamos/api/Reclamaciones/Monitoreo';

  constructor(private http: HttpClient) {}

  getReclamos(filtro: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, filtro); // Realiza la petición a la API con el filtro
  }
}
