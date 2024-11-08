import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltrosReclamoService {
  public campus = signal<string | null>(null);
  public fechaInicio = signal<Date | null>(null);
  public fechaFin = signal<Date | null>(null);
  public tipoReclamo = signal<string | null>(null);

  actualizarCampus(nuevoCampus: string): void {
    this.campus.set(nuevoCampus);
  }

  actualizarFechaInicio(nuevaFecha: Date): void {
    this.fechaInicio.set(nuevaFecha);
  }

  actualizarFechaFin(nuevaFecha: Date): void {
    this.fechaFin.set(nuevaFecha);
  }

  actualizarTipoReclamo(nuevoTipo: string): void {
    this.tipoReclamo.set(nuevoTipo);
  }
}
