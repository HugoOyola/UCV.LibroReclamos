// universidad.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universidad } from '../../../page/main/interface/universidades';

@Injectable({
  providedIn: 'root',
})
export class UniversidadService {
  private apiUrl = 'http://localhost/Api_Calidad/api/ControlConfiguracion/Sedes';

  constructor(private http: HttpClient) {}

  getUniversidades(filtro: any): Observable<{ lstItem: Universidad[] }> {
    return this.http.post<{ lstItem: Universidad[] }>(this.apiUrl, filtro);
  }
}
