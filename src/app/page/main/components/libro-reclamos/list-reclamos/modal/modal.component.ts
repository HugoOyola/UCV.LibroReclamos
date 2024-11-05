import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Reclamo } from '../../../../interface/reclamo';

@Component({
	selector: 'app-modal-content',
	standalone: true,
	imports: [CommonModule, MatDialogModule],
	template: `
		<div class="p-0 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
			<!-- Título con franja -->
			<div class="bg-blue-500 text-white px-6 py-3 rounded-t-lg">
				<h2 class="text-xl font-semibold">Detalles del Reclamo</h2>
			</div>

			<!-- Contenido del modal -->
			<mat-dialog-content class="px-6 py-4 overflow-y-auto max-h-[50vh]">
				<div class="grid grid-cols-1 gap-4 text-gray-800">
					<p><strong>ID Reclamo:</strong> {{ data.idreclamo }}</p>
					<p><strong>Nombre:</strong> {{ data.cRecNombre }}</p>
					<p><strong>DNI:</strong> {{ data.cRecDni }}</p>
					<p><strong>Fecha Registro:</strong> {{ data.cRecFecha }}</p>
					<p><strong>Teléfono:</strong> {{ data.cRecTelefono }}</p>
					<p><strong>Correo:</strong> {{ data.cRecEmail }}</p>
					<p><strong>Descripción:</strong> {{ data.cRecDescripcion }}</p>
					<p><strong>Filial:</strong> {{ data.cPerJuridica }}</p>
					<p><strong>Tipo de Reclamo:</strong> {{ data.cTipoReclamo }}</p>
					<p><strong>Estado:</strong> {{ data.cEstadoReclamo }}</p>
					<!-- Agrega aquí cualquier otro campo de datos que necesites -->
				</div>

				<!-- Textarea para ingresar comentarios -->
				<div class="mt-4">
					<label class="block text-gray-700 font-semibold mb-2" for="comentario">Agregar Comentario:</label>
					<textarea id="comentario" rows="3" class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
				</div>
			</mat-dialog-content>

			<!-- Acciones del modal -->
			<mat-dialog-actions class="flex justify-end p-4">
				<button mat-button mat-dialog-close class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2">
					Cerrar
				</button>
				<button mat-button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
					Guardar
				</button>
			</mat-dialog-actions>
		</div>
	`,
})
export class ModalContentComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: Reclamo) {}
}
