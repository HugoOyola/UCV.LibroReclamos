import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalContentComponent } from './modal/modal.component';

// Interfaz Reclamo para tipar los datos correctamente
export interface Reclamo {
	codReclamo: number;
	usuario: string;
	usuarioReclamante: string;
	dni: string;
	fechaRegistro: string;
	correo: string;
	filial: string;
}

@Component({
	selector: 'app-control-reclamos',
	standalone: true,
	imports: [
		CommonModule,
		MatTableModule,
		MatPaginatorModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		ModalContentComponent,
	],
	templateUrl: './listado-reclamos.component.html',
	styleUrls: ['./listado-reclamos.component.scss'],
})
export class ListadoReclamosComponent implements AfterViewInit {
	// Aquí tipamos explícitamente la fuente de datos con Reclamo[]
	public dataSource = new MatTableDataSource<Reclamo>(RECLAMOS_DATA);
	// Columnas a mostrar en la tabla
	public displayedColumns: string[] = [
		'codReclamo',
		'usuario',
		'usuarioReclamante',
		'dni',
		'fechaRegistro',
		'correo',
		'filial',
		'arch',
		'tipo',
		'reenviar',
		'modelo',
		'accion',
	];

	@ViewChild(MatPaginator) public paginator!: MatPaginator;

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	openModal(element: Reclamo): void {
		this.dialog.open(ModalContentComponent, {
			data: element, // Aquí pasamos el elemento tipado como Reclamo
		});
	}

	constructor(public dialog: MatDialog) {}
}

const RECLAMOS_DATA: Reclamo[] = [
	{
		codReclamo: 20162,
		usuario: 'Alumno',
		usuarioReclamante: 'HOROSETIGL LANOS JOSELIN LUZ',
		dni: '77330987',
		fechaRegistro: '01/10/2024 10:25:57 PM',
		correo: 'joselin.lanos@gmail.com',
		filial: 'HUARAZ',
	},
	{
		codReclamo: 20161,
		usuario: 'Alumno',
		usuarioReclamante: 'VASQUEZ CALLE JACKELINE',
		dni: '74964740',
		fechaRegistro: '01/10/2024 8:15:21 PM',
		correo: 'jvasquez0106@gmail.com',
		filial: 'LIMA ESTE',
	},
	// Más datos aquí...
];
