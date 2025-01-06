export interface Reclamo {
	idreclamo: number; // Código único del reclamo
	cRecNombre: string; // Nombre del usuario reclamante
	cRecDni: string; // DNI del usuario reclamante
	cRecFecha: string; // Fecha de registro del reclamo
	cRecTelefono: string; // Teléfono de contacto del usuario
	cRecEmail: string; // Correo electrónico del usuario
	cRecDescripcion: string; // Descripción detallada del reclamo
	cPerJuridica: string; // Filial o entidad jurídica relacionada
	cPerApellido : string; // Apellido del usuario reclamante
	cTipoReclamo: string; // Tipo de reclamo
	cEstadoReclamo: string; // Estado actual del reclamo
	cRecDireccion: string; // Dirección del usuario reclamante (si está disponible)
	nUniOrgCodigo: string; // Código de la unidad organizativa
	cRecCiudad: string; // Ciudad del usuario reclamante
	cRecProvincia: string; // Provincia o región del usuario
	cRecPais: string; // País del usuario reclamante
	nArea: string; // Área o departamento relacionado con el reclamo
	fechaActualizacion: string; // Fecha de la última actualización del reclamo
	usuarioAsignado: string; // Usuario asignado al reclamo
	prioridad: string; // Nivel de prioridad del reclamo
	comentarios: string[]; // Comentarios o notas añadidas al reclamo
	historialEstados: {
		// Historial de cambios en el estado del reclamo
		fecha: string;
		estado: string;
		usuario: string;
	};
}
