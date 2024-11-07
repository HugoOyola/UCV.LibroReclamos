import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Universidad } from '../../../interface/universidades';
import { UniversidadService } from '../../../services/universidades.service';

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
export class SearchReclamosComponent implements OnInit, OnChanges {
	@Input() public codigo!: string; // Recibe el código desde LibroReclamosComponent
	@Output() public codigoBuscado = new EventEmitter<string>();
	@Output() public filtrosBuscados = new EventEmitter<{
		campus: string;
		fechaInicio: Date;
		fechaFin: Date;
	}>();

	public tipoReclamo = '';
	public estado: Set<string> = new Set();
	public fechaInicio: Date | null = null;
	public fechaFin: Date | null = null;
	public universidadSeleccionada: string | null = null;
	public codigoForm!: FormGroup;
	public detalladaForm!: FormGroup;
	public universidades: Universidad[] = [];

	public errorUniversidad = false;
	public errorFechaInicio = false;
	public errorFechaFin = false;
	public errorCodigo = false;

	public tipoReclamoDetallado = '';
	public estadoDetallado: Set<string> = new Set();

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

	constructor(
		private fb: FormBuilder,
		private universidadService: UniversidadService,
	) { }

	ngOnInit(): void {
		this.tipoReclamoDetallado = 'Todos';
		this.estado.add('Todos');

		this.codigoForm = this.fb.group({
			codigo: ['', [Validators.required, Validators.minLength(5)]],
		});

		this.detalladaForm = this.fb.group({
			universidadSeleccionada: ['', Validators.required],
			fechaInicio: [null, Validators.required],
			fechaFin: [null, Validators.required],
			tipoReclamoDetallado: ['Todos'],
			estadoDetallado: [this.estado],
		});
	}
	ngOnChanges(changes: SimpleChanges): void {
		// Detecta cambios en el valor de codigo
		if (changes['codigo'] && changes['codigo'].currentValue) {
			this.loadUniversidades(changes['codigo'].currentValue);
		}
	}
	// Función para cargar universidades desde la API basado en el código
	loadUniversidades(codigo: string): void {
		const filtro = {
			vcPerCodigo: codigo,
			vnModuloId: 3,
			vnEsAutorizado: 1,
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
				this.universidades = data.lstItem; // Actualiza la lista de universidades
			},
			error: (error) => {
				console.error('Error al cargar universidades', error);
			},
		});
	}
	// Función de búsqueda por código
	buscarPorCodigo(): void {
		if (this.codigoForm.valid) {
			const codigo = this.codigoForm.get('codigo')?.value;
			this.codigoBuscado.emit(codigo);
		} else {
			this.codigoForm.markAllAsTouched();
		}
	}

	// Función de búsqueda detallada
	buscar(): void {
		if (this.detalladaForm.valid) {
			const { universidadSeleccionada, fechaInicio, fechaFin } =
				this.detalladaForm.value;
			this.filtrosBuscados.emit({
				campus: universidadSeleccionada,
				fechaInicio,
				fechaFin,
			});
		} else {
			this.detalladaForm.markAllAsTouched();
		}
	}

	isChecked(item: string): boolean {
		return this.estado.has(item);
	}

	toggleEstado(checked: boolean, item: string): void {
		if (checked) {
			this.estado.add(item);
		} else {
			this.estado.delete(item);
		}
		this.detalladaForm.get('estadoDetallado')?.setValue(this.estado);
	}
}
