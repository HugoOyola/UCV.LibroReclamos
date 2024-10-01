import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [
	MatFormFieldModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatInputModule,
	MatSelectModule,
	MatRadioModule,
	MatCheckboxModule,
	MatButtonModule,
	MatIconModule,
];

@Component({
	selector: 'app-libro-reclamo',
	standalone: true,
	imports: [MATERIAL_MODULES, FormsModule, ReactiveFormsModule, CommonModule],
	templateUrl: './libro-reclamos.component.html',
	styleUrls: ['./libro-reclamos.component.scss'],
})
export class LibroReclamosComponent {
	public tipoReclamo = '';
	public estado: Set<string> = new Set(); // Cambiado a Set para evitar duplicados
	public fechaInicio: Date | null = null;
	public fechaFin: Date | null = null;
	public universidadSeleccionada: string | null = null; // Añadido para seleccionar universidad

	// Lista de universidades
	public universidades = [
		{ id: '6700000000', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - CALLAO' },
		{ id: '7100000000', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - CHEPEN' },
		{ id: '1000003204', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - CHICLAYO' },
		{ id: '1000147917', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - CHIMBOTE' },
		{ id: '6800000000', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - HUARAZ' },
		{ id: '6600000000', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - LIMA ATE' },
		{ id: '6500000000', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - LIMA ESTE' },
		{ id: '1000095671', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - LIMA NORTE' },
		{ id: '6900000000', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - MOYOBAMBA' },
		{ id: '1000114557', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - PIURA' },
		{ id: '1000136996', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - TARAPOTO' },
		{ id: '1000098770', nombre: 'UNIVERSIDAD CÉSAR VALLEJO SAC - TRUJILLO' },
	];

	public tiposReclamo = ['Reclamo', 'Queja', 'Consulta', 'Sugerencia'];
	public estados = [
		'Pendiente',
		'En Proceso',
		'Atendido',
		'Conforme',
		'Vencido',
		'No-Conforme',
		'Inválido',
	];

	isChecked(item: string): boolean {
		return this.estado.has(item); // Cambiado para usar Set
	}

	toggleEstado(checked: boolean, item: string): void {
		if (checked) {
			this.estado.add(item); // Cambiado para usar Set
		} else {
			this.estado.delete(item); // Cambiado para usar Set
		}
	}

	buscar(): void {
		// Manejar la búsqueda con los valores seleccionados
		console.log({
			fechaInicio: this.fechaInicio,
			fechaFin: this.fechaFin,
			tipoReclamo: this.tipoReclamo,
			estado: Array.from(this.estado), // Convertido a Array para mostrar en la consola
			universidad: this.universidadSeleccionada, // Añadido para incluir la universidad seleccionada
		});
	}
}
