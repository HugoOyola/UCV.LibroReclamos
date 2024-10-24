import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReclamosService } from '@shared/services/reclamo.service';
import { Reclamo } from '../../../interface/reclamo';
import { ModalContentComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-control-reclamos',
	standalone: true,
	templateUrl: './list-reclamos.component.html',
	styleUrls: ['./list-reclamos.component.scss'],
	imports: [
		CommonModule,
		MatTableModule,
		MatPaginatorModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		ModalContentComponent,
	],
})
export class ListReclamosComponent implements AfterViewInit, OnInit {
	public dataSource = new MatTableDataSource<Reclamo>([]);
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

	@ViewChild(MatPaginator)
	public paginator!: MatPaginator;

	// Este es el filtro que se enviará a la API
	public filtro = {
		idReclamo: "0",
		cpercodigo: "7000090106",
		cPerJuridica: "0",
		dFechaInicio: "2024-09-01",
		dFechaFin: "2024-10-10",
		cTipoReclamo: "30",
		cEstadoReclamo: "0",
		pagination: {
			pageIndex: 1,
			pageSize: 10,
			totalRows: 0
		}
	};

	constructor(private reclamosService: ReclamosService, public dialog: MatDialog) {}

	ngOnInit(): void {
		this.loadReclamos();
	}

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	loadReclamos(): void {
		this.reclamosService.getReclamos(this.filtro).subscribe({
			next: (data: any) => {
				this.dataSource.data = data.lstItem;  // Asigna los reclamos obtenidos de la API
			},
			error: (error) => {
				console.error('Error al obtener los reclamos', error);
			}
		});
	}

	openModal(element: Reclamo): void {
		this.dialog.open(ModalContentComponent, {
			data: element,
		});
	}
}
