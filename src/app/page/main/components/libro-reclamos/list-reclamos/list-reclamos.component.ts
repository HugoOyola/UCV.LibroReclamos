import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatTableModule } from '@angular/material/table'; // Importa MatTableModule
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
	selector: 'app-list-reclamos',
	standalone: true,
	imports: [
		CommonModule,
		MatTableModule,
		FormsModule,
		MatInputModule,
		MatSelectModule,
	], // Asegúrate de incluir FormsModule
	templateUrl: './list-reclamos.component.html',
	styleUrls: ['./list-reclamos.component.scss'],
})
export class ListReclamosComponent {
	public displayedColumns: string[] = [
		'cod',
		'datos',
		'detalle',
		'accion',
		'estado',
		'apoyoCiu',
	];

	public dataSource = new MatTableDataSource<ReclamoElement>([]);

	public campuses = [
		'UCV FILIAL CALLAO',
		'UCV FILIAL LIMA',
		'UCV FILIAL AREQUIPA',
	];
	public areas = ['ADMINISTRACIÓN DE EMPRESAS', 'INGENIERÍA', 'COMUNICACIÓN'];
	public estados = [
		'Pendiente',
		'En Proceso',
		'Enviado Imagen',
		'Atendido',
		'Conforme',
		'Vencido',
		'Inválido',
		'No-Conforme',
	];

	constructor() {
		this.loadData();
	}

	loadData(): void {
		const reclamoData: ReclamoElement = {
			cod: 19926,
			datos: {
				campus: 'UCV FILIAL CALLAO',
				nombre: 'Moscoso Lopez Miluska Desire Brigith',
				dni: '70945073',
				telefono: '992798467',
				email: 'mdbmlopez17@hotmail.com',
				categoria: 'Atención',
			},
			detalle: 'Descripción completa del reclamo...',
			accion: {
				area: 'ADMINISTRACIÓN DE EMPRESAS',
				fechaRegistro: new Date('2024-09-06T15:36:46'),
				respuesta: 'Breve respuesta de la acción...',
			},
			estado: 'Conforme',
			apoyoCiu: false,
			fecha: new Date('2024-09-03T14:47:22'),
		};

		this.dataSource.data = [reclamoData];
	}

	getRowColor(date: Date): string {
		const currentDate = new Date(2024, 9, 1);
		const fourDaysBefore = new Date(2024, 8, 27);

		if (date >= fourDaysBefore && date < currentDate) {
			return 'bg-orange-200';
		} else if (date >= currentDate) {
			return 'bg-red-200';
		}
		return '';
	}
}

export interface ReclamoElement {
	cod: number;
	datos: {
		campus: string;
		nombre: string;
		dni: string;
		telefono: string;
		email: string;
		categoria: string;
	};
	detalle: string;
	accion: {
		area: string;
		fechaRegistro: Date;
		respuesta: string;
	};
	estado: string;
	apoyoCiu: boolean;
	fecha: Date;
}
