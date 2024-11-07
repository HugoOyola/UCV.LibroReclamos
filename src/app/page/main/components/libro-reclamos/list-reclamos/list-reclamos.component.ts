import { AfterViewInit, Component, ViewChild, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReclamosService } from '../../../services/reclamo.service';
import { UniversidadService } from '../../../services/universidades.service';
import { Reclamo } from '../../../interface/reclamo';
import { ModalContentComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModalHistorialComponent } from './modal-historial/modal-historial.component';
import { Universidad } from '../../../interface/universidades';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
	selector: 'app-list-reclamos',
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
		MatTooltipModule,
	],
})
export class ListReclamosComponent implements AfterViewInit, OnInit, OnChanges {
	@Input()
	public codigo!: string;

	@Input()
	public set filtros(filtros: { campus: string; fechaInicio: Date; fechaFin: Date }) {
		if (filtros) {
			this.buscarReclamosDetallados(filtros);
		}
	}

	public dataSource = new MatTableDataSource<Reclamo>([]);
	public campusNames: { [codigo: string]: string } = {};
	public displayedColumns: string[] = [
		'idreclamo',
		'cRecNombre',
		'cRecDni',
		'cRecFecha',
		'cRecEmail',
		'cPerJuridica',
		'arch',
		'tipo',
		'reenviar',
		'modelo',
		'accion',
	];

	@ViewChild(MatPaginator) public paginator!: MatPaginator;

	public filtro = {
		idReclamo: '0',
		cpercodigo: '',
		cPerJuridica: '0',
		dFechaInicio: '2024-01-01',
		dFechaFin: '2024-10-10',
		cTipoReclamo: '30',
		cEstadoReclamo: '0',
		pagination: {
			pageIndex: 1,
			pageSize: 10,
			totalRows: 0,
		},
	};

	constructor(
		private reclamosService: ReclamosService,
		private universidadService: UniversidadService,
		public dialog: MatDialog,
	) { }

	ngOnInit(): void {
		this.loadCampusNames();
		this.loadReclamos();
	}

	ngOnChanges(changes: SimpleChanges): void {
		// Detecta cambios en el valor de `codigo`
		if (changes['codigo'] && changes['codigo'].currentValue) {
			this.filtro.cpercodigo = changes['codigo'].currentValue; // Actualiza cpercodigo en el filtro
			this.loadCampusNames();
			this.loadReclamos();
		}
	}

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	// Cargar nombres de los campus usando el código de usuario dinámico
	loadCampusNames(): void {
		const filtro = {
			vcPerCodigo: this.filtro.cpercodigo,
			vnModuloId: 2,
			vnEsAutorizado: 0,
			vnTipoCurricula: 0,
			detalleConfiguracion: {
				vIdModulo: 0,
				vnSisGruCodigo: 0,
				vnSisGruTipo: 0,
				vnObjTipo: 0,
				vnObjCodigo: 'string',
			},
		};

		this.universidadService.getUniversidades(filtro).subscribe({
			next: (data) => {
				this.campusNames = data.lstItem.reduce((acc: any, uni: Universidad) => {
					acc[uni.cPerJuridica.trim()] = uni.cPerApellido;
					return acc;
				}, {});
			},
			error: (error) => console.error('Error al cargar nombres de campus', error),
		});
	}

	// Cargar reclamos usando el filtro actualizado
	loadReclamos(): void {
		this.reclamosService.getReclamos(this.filtro).subscribe({
			next: (data: any) => {
				this.dataSource.data = data.lstItem || [];
			},
			error: (error) => {
				console.error('Error al obtener los reclamos', error);
			},
		});
	}

	// Búsqueda de un reclamo específico usando `codigo`
	buscarReclamoPorCodigo(codigo: string): void {
		const filtro = { ...this.filtro, idReclamo: codigo };
		this.reclamosService.getReclamos(filtro).subscribe({
			next: (data: any) => {
				this.dataSource.data = data.lstItem || [];
			},
			error: (error) => console.error('Error al buscar reclamo por código', error),
		});
	}

	// Búsqueda detallada usando `filtros`
	buscarReclamosDetallados(filtros: { campus: string; fechaInicio: Date; fechaFin: Date }): void {
		const filtro = {
			idReclamo: '0',
			cpercodigo: this.codigo,
			cPerJuridica: filtros.campus || '0',
			dFechaInicio: filtros.fechaInicio ? filtros.fechaInicio.toISOString().split('T')[0] : '',
			dFechaFin: filtros.fechaFin ? filtros.fechaFin.toISOString().split('T')[0] : '',
			cTipoReclamo: '30',
			cEstadoReclamo: '0',
			pagination: {
				pageIndex: 1,
				pageSize: 100,
				totalRows: 0,
			},
		};

		this.reclamosService.getReclamos(filtro).subscribe({
			next: (data: any) => {
				this.dataSource.data = data.lstItem || [];
			},
			error: (error) => {
				console.error('Error al buscar reclamos detallados:', error);
			},
		});
	}

	// Método para abrir el historial de reclamos en un modal
	openHistorial(element: Reclamo): void {
		this.dialog.open(ModalHistorialComponent, {
			data: element,
		});
	}

	// Método para abrir el detalle de reclamo en un modal
	openDetalle(element: Reclamo): void {
		this.dialog.open(ModalContentComponent, {
			data: element,
		});
	}
}
