import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Reclamo } from '../list-reclamos.component'; // Asegúrate de importar correctamente la interfaz

@Component({
	selector: 'app-modal-content',
	standalone: true,
	imports: [CommonModule, MatDialogModule],
	template: `
		<h2 mat-dialog-title>Detalles del Reclamo</h2>
		<mat-dialog-content>
			<p><strong>Código de Reclamo:</strong> {{ data.codReclamo }}</p>
			<p><strong>Usuario:</strong> {{ data.usuario }}</p>
			<p><strong>Usuario Reclamante:</strong> {{ data.usuarioReclamante }}</p>
			<p><strong>DNI:</strong> {{ data.dni }}</p>
			<p><strong>Fecha de Registro:</strong> {{ data.fechaRegistro }}</p>
			<p><strong>Correo:</strong> {{ data.correo }}</p>
			<p><strong>Filial:</strong> {{ data.filial }}</p>
		</mat-dialog-content>
		<mat-dialog-actions>
			<button mat-button mat-dialog-close>Cerrar</button>
		</mat-dialog-actions>
	`,
})
export class ModalContentComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: Reclamo) {}
}
