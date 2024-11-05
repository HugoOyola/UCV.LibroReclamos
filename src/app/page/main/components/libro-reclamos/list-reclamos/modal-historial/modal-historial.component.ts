import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog,	MatDialogActions,	MatDialogClose,	MatDialogContent,	MatDialogModule,	MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-modal-historial',
	standalone: true,
	imports: [MatDialogModule, MatIconModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose ],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<h2 mat-dialog-title>Historial: Trámite del Reclamo</h2>
		<mat-dialog-content
			class="relative w-full max-w-lg mx-auto p-6 overflow-y-auto max-h-screen"
		>
			<!-- Timeline container -->
			<div class="relative border-l-2 border-gray-300 pl-8">
				<!-- Step 1 -->
				<div class="mb-6 flex items-start">
					<div
						class="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-semibold text-green-600">Recepción</h3>
						<p class="text-sm text-gray-600">Fecha: 01/10/2024</p>
						<p class="text-sm text-gray-600">
							El trámite fue recibido en la oficina de recepción.
						</p>
					</div>
				</div>

				<!-- Step 2 -->
				<div class="mb-6 flex items-start">
					<div
						class="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-semibold text-green-600">
							Revisión Administrativa
						</h3>
						<p class="text-sm text-gray-600">Fecha: 02/10/2024</p>
						<p class="text-sm text-gray-600">
							El trámite fue revisado por el departamento administrativo.
						</p>
					</div>
				</div>

				<!-- Step 3 (Current step) -->
				<div class="mb-6 flex items-start">
					<div
						class="bg-yellow-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-semibold text-yellow-600">Área Jurídica</h3>
						<p class="text-sm text-gray-600">Fecha: En Proceso</p>
						<p class="text-sm text-gray-600">
							El trámite está en revisión en el área jurídica.
						</p>
					</div>
				</div>

				<!-- Step 4 (Rejected) -->
				<div class="mb-6 flex items-start">
					<div
						class="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-semibold text-red-600">
							Trámite Rechazado
						</h3>
						<p class="text-sm text-gray-600">Fecha: 03/10/2024</p>
						<p class="text-sm text-gray-600">
							El trámite ha sido rechazado por el área correspondiente.
						</p>
					</div>
				</div>

				<!-- Step 5 (Pending Approval) -->
				<div class="flex items-start">
					<div
						class="bg-gray-300 text-white w-8 h-8 flex items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-semibold text-gray-600">
							Aprobación Final
						</h3>
						<p class="text-sm text-gray-600">Pendiente</p>
						<p class="text-sm text-gray-600">
							Esperando aprobación final del trámite.
						</p>
					</div>
				</div>
			</div>
		</mat-dialog-content>
		<mat-dialog-actions class="flex justify-end">
			<button mat-button mat-dialog-close class="text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2">Cerrar</button>
		</mat-dialog-actions>
	`,
	styleUrl: './modal-historial.component.scss',
})
export class ModalHistorialComponent {
	public readonly dialog = inject(MatDialog);

	openHistorial(): void {
		this.dialog.open(ModalHistorialComponent);
	}
}
