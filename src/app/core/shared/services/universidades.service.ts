import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Universidad } from '../../../page/main/interface/universidades';

@Injectable({
  providedIn: 'root',
})
export class UniversidadService {
  private apiUrl = 'http://localhost/Api_Calidad/api/ControlConfiguracion/Sedes';

  constructor(private http: HttpClient) {}

  getUniversidades(filtro: any): Observable<{ lstItem: Universidad[] }> {
    return this.http.post<{ lstItem: Universidad[] }>(this.apiUrl, filtro).pipe(
      catchError((error) => {
        console.error('Error al cargar universidades', error);
        return throwError(() => new Error('Error al cargar universidades'));
      })
    );
  }
}
