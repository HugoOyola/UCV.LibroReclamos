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
	public filtros: { campus: string; fechaInicio: Date; fechaFin: Date; tipo: string } | null = null;

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

	onBuscar(event: { startDate: Date | null; endDate: Date | null; tipoReclamo: string; campus: string }): void {
		const formattedStartDate = event.startDate
			? event.startDate.toLocaleDateString('en-CA')
			: null;
		const formattedEndDate = event.endDate
			? event.endDate.toLocaleDateString('en-CA')
			: null;

		console.log('Campus:', event.campus);
		console.log('Fecha de Inicio:', formattedStartDate);
		console.log('Fecha de Fin:', formattedEndDate);
		console.log('Tipo de Reclamo:', event.tipoReclamo);
	}
}
