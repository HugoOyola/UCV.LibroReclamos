import { Component, inject, effect } from '@angular/core';
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
	public filtros: { campus: string; startDate: Date | null; endDate: Date | null; tipoReclamo: string } | null = null;

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
	onBuscar(filtros: { campus: string; startDate: Date | null; endDate: Date | null; tipoReclamo: string }): void {
		this.filtros = filtros;
	}
}
