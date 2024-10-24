import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universidad } from '../../../page/main/interface/universidades';  // Importa la interfaz

@Injectable({
  providedIn: 'root',
})
export class UniversidadService {
  private apiUrl = 'http://localhost/Api_Calidad/api/ControlConfiguracion/Sedes'; // URL de la API

  constructor(private http: HttpClient) {}

  getUniversidades(filtro: any): Observable<{ lstItem: Universidad[] }> {
    return this.http.post<{ lstItem: Universidad[] }>(this.apiUrl, filtro);  // Realiza la petición a la API
  }
}
