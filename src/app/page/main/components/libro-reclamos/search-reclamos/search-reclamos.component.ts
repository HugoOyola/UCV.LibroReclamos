import { Component, OnInit } from '@angular/core';
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
import { MatTabsModule } from '@angular/material/tabs';

@Component({
	selector: 'app-search-reclamos',
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		MatCheckboxModule,
		MatButtonModule,
		MatIconModule,
		MatTabsModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
	],
	templateUrl: './search-reclamos.component.html',
	styleUrls: ['./search-reclamos.component.scss'],
})
export class SearchReclamosComponent implements OnInit {
	public codigo: string = ''; // Campo para el código
	public tipoReclamo = ''; // Tipo de reclamo seleccionado
	public estado: Set<string> = new Set(); // Set para el estado de los reclamos
	public fechaInicio: Date | null = null; // Fecha de inicio de búsqueda
	public fechaFin: Date | null = null; // Fecha de fin de búsqueda
	public universidadSeleccionada: string | null = null; // Universidad seleccionada

	// Lista de universidades
	public universidades = [
		{ id: '0', nombre: 'TODOS' },
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

	public tiposReclamo = ['Todos', 'Reclamo', 'Queja', 'Consulta / Sugerencia'];
	public estados = [
		'Todos',
		'Pendiente',
		'En Proceso',
		'Atendido',
		'Conforme',
		'Vencido',
		'No-Conforme',
		'Inválido',
	];

	ngOnInit(): void {
		// Si necesitas lógica adicional para inicializar el valor
		this.tipoReclamo = 'Todos'; // Aquí también puedes asegurarte de que se asigne el valor por defecto
	}

	// Función para verificar si el estado está seleccionado
	isChecked(item: string): boolean {
		return this.estado.has(item);
	}

	// Función para añadir o quitar el estado seleccionado
	toggleEstado(checked: boolean, item: string): void {
		if (checked) {
			this.estado.add(item);
		} else {
			this.estado.delete(item);
		}
	}

	// Función de búsqueda por código
	buscarPorCodigo(): void {
		console.log({
			codigo: this.codigo,
		});
	}

	// Función de búsqueda detallada
	buscar(): void {
		console.log({
			fechaInicio: this.fechaInicio,
			fechaFin: this.fechaFin,
			tipoReclamo: this.tipoReclamo,
			estado: Array.from(this.estado),
			universidad: this.universidadSeleccionada,
		});
	}
}
