import { Component, inject, effect } from '@angular/core';
import { SearchReclamosComponent } from './search-reclamos/search-reclamos.component';
import { ListReclamosComponent } from './list-reclamos/list-reclamos.component';
import { MainSharedService } from '@shared/services/main-shared.service';
import { BusquedaReclamoComponent } from "./busqueda-reclamo/busqueda-reclamo.component";
import { ListadoReclamoComponent } from "./listado-reclamo/listado-reclamo.component";

@Component({
	selector: 'app-libro-reclamo',
	standalone: true,
	imports: [BusquedaReclamoComponent, ListadoReclamoComponent],
	templateUrl: './libro-reclamos.component.html',
	styleUrls: ['./libro-reclamos.component.scss'],
})
export class LibroReclamosComponent {
	public codigo: string = '';
	public filtros: { campus: string; startDate: Date | null; endDate: Date | null; tipoReclamo: string } = {
		campus: '',
		startDate: null,
		endDate: null,
		tipoReclamo: ''
	};
	private mainSharedService = inject(MainSharedService);

	constructor() {
		// Efecto para observar cambios en cPerCodigo y actualizar 'codigo' en este componente
		effect(() => {
			const nuevoCodigo = this.mainSharedService.cPerCodigo();
			if (nuevoCodigo) {
				this.codigo = nuevoCodigo;
			}
		});
	}

	// Método que maneja la emisión de filtros desde BusquedaReclamoComponent
	onBuscar(event: { startDate: Date | null; endDate: Date | null; tipoReclamo: string; campus: string }): void {
		// Formatear las fechas para enviarlas correctamente al listado
		const formattedStartDate = event.startDate ? event.startDate.toLocaleDateString('en-CA') : null;
		const formattedEndDate = event.endDate ? event.endDate.toLocaleDateString('en-CA') : null;

		// Asignar los filtros solo después de hacer clic en buscar
		this.filtros = {
			campus: event.campus,
			startDate: formattedStartDate ? new Date(formattedStartDate) : null,
			endDate: formattedEndDate ? new Date(formattedEndDate) : null,
			tipoReclamo: event.tipoReclamo,
		};
	}
}
