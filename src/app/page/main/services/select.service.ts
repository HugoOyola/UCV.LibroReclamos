// select.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiOptionsResponse {
  lstItem: { nIntCodigo: number; cIntNombre: string }[];
}

interface ApiSedesResponse {
  lstItem: { cPerJuridica: string; cPerApellido: string }[];
}

interface ApiIntranetUnidadResponse {
  lstItem: { nuniorgcodigo: number; cUniOrgNombre: string }[];
}

@Injectable({ providedIn: 'root' })
export class SelectService {
  private optionsApiUrl = 'http://localhost/Api_Calidad/api/ControlConfiguracion/Interfaces';
  private sedesApiUrl = 'http://localhost/Api_Calidad/api/ControlConfiguracion/Sedes';
  private intranetUnidadApiUrl = 'http://localhost/Api_Calidad/api/ControlConfiguracion/IntranetUnidad';

  constructor(private http: HttpClient) {}

  getOptions(): Observable<{ value: string; viewValue: string }[]> {
    return this.http.post<ApiOptionsResponse>(this.optionsApiUrl, {
      nIntClase: 1066,
      nIntTipo: 1,
      nIntCodigo: 0,
      cIntJerarquia: ''
    }).pipe(
      map(response => response.lstItem.map(item => ({
        value: item.nIntCodigo.toString(),
        viewValue: item.cIntNombre
      })))
    );
  }

  getSedesOptions(vcPerCodigo: string): Observable<{ value: string; viewValue: string }[]> {
    return this.http.post<ApiSedesResponse>(this.sedesApiUrl, {
      vcPerCodigo, // Ahora recibe vcPerCodigo como argumento
      vnModuloId: 3,
      vnEsAutorizado: 1,
      vnTipoCurricula: 0,
      detalleConfiguracion: {
        vIdModulo: 0,
        vnSisGruCodigo: 0,
        vnSisGruTipo: 0,
        vnObjTipo: 0,
        vnObjCodigo: 'string'
      }
    }).pipe(
      map(response => response.lstItem.map(item => ({
        value: item.cPerJuridica.trim(),
        viewValue: item.cPerApellido.trim()
      })))
    );
  }

  getIntranetUnidadOptions(cPerJuridica: string): Observable<{ value: string; viewValue: string }[]> {
    return this.http.post<ApiIntranetUnidadResponse>(this.intranetUnidadApiUrl, { cPerJuridica }).pipe(
      map(response => response.lstItem.map(item => ({
        value: item.nuniorgcodigo.toString(),
        viewValue: item.cUniOrgNombre
      })))
    );
  }

  getData(apiType: 'options' | 'sedes' | 'intranetUnidad', param?: string): Observable<{ value: string; viewValue: string }[]> {
    switch (apiType) {
      case 'options':
        return this.getOptions();
      case 'sedes':
        return this.getSedesOptions(param || '');
      case 'intranetUnidad':
        return this.getIntranetUnidadOptions(param || '');
      default:
        throw new Error(`API type ${apiType} is not supported`);
    }
  }
}
