import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class SearchReclamosComponent implements OnInit {
	@Output()
	public codigoBuscado = new EventEmitter<string>();
	@Output()
	public filtrosBuscados = new EventEmitter<{
		campus: string;
		fechaInicio: Date;
		fechaFin: Date;
	}>();

	public codigo: string = ''; // Campo para el código
	public tipoReclamo = ''; // Tipo de reclamo seleccionado
	public estado: Set<string> = new Set(); // Set para el estado de los reclamos
	public fechaInicio: Date | null = null; // Fecha de inicio de búsqueda
	public fechaFin: Date | null = null; // Fecha de fin de búsqueda
	public universidadSeleccionada: string | null = null; // Universidad seleccionada
	public codigoForm!: FormGroup;
	public detalladaForm!: FormGroup;
	public universidades: Universidad[] = []; // Lista tipada de universidades

	// Variables para mostrar mensajes de error
	public errorUniversidad = false;
	public errorFechaInicio = false;
	public errorFechaFin = false;
	public errorCodigo = false;

	// Variables de búsqueda detallada
	public tipoReclamoDetallado = ''; // Tipo de reclamo para búsqueda detallada
	public estadoDetallado: Set<string> = new Set(); // Set para el estado de los reclamos en búsqueda detallada

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
	) {}

	ngOnInit(): void {
		this.tipoReclamoDetallado = 'Todos'; // Tipo de reclamo seleccionado por defecto
		this.estado.add('Todos'); // Selecciona el estado "Todos" por defecto

		// Formulario para la búsqueda por código
		this.codigoForm = this.fb.group({
			codigo: ['', [Validators.required, Validators.minLength(5)]],
		});

		// Formulario para la búsqueda detallada
		this.detalladaForm = this.fb.group({
			universidadSeleccionada: ['', Validators.required],
			fechaInicio: [null, Validators.required],
			fechaFin: [null, Validators.required],
			tipoReclamoDetallado: ['Todos'],
			estadoDetallado: [this.estado],
		});

		this.loadUniversidades(); // Cargar universidades al iniciar
	}

	// Función para cargar universidades desde la API
	loadUniversidades(): void {
		const filtro = {
			vcPerCodigo: '7000090106',
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
				this.universidades = data.lstItem; // Asigna las universidades obtenidas a la variable local
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
			this.codigoBuscado.emit(codigo); // Emitir el código
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
		this.detalladaForm.get('estadoDetallado')?.setValue(this.estado); // Actualiza el valor del estado en el formulario
	}
}
