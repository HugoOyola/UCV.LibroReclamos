// reclamo-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReclamoData } from '../interface/reclamosdata';

interface ReclamoApiResponse {
  lstItem: ReclamoData[];
  pagination: {
    pageIndex: number;
    pageSize: number;
    totalRows: number;
  };
  isSuccess: boolean;
  lstError: any[];
  warnings: any[];
  ticket: string;
  clientName: string;
  userName: string;
  serverName: string;
  resultado: number;
}

@Injectable({
  providedIn: 'root',
})
export class ReclamoApiService {
  private apiUrl = 'http://localhost/Api_LibroReclamos/api/Reclamaciones/Monitoreo';

  constructor(private http: HttpClient) {}

  getReclamos(requestBody: any): Observable<ReclamoApiResponse> {
    return this.http.post<ReclamoApiResponse>(this.apiUrl, requestBody);
  }
}
