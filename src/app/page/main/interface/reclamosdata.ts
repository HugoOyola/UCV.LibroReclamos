// reclamo.model.ts
export interface ReclamoData {
  idreclamo: string;
  cRecNombre: string;
  cRecDni: string;
  cRecFecha: string;
  cRecEmail: string;
  cPerJuridica: string;
  arch?: string;
  tipo?: string;
  reenviar?: string;
  modelo?: string;
  accion?: string;
  cGoogleDriveId?: string; // Agregamos cGoogleDriveId
}
