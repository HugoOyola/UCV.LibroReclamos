import { Component, inject, effect } from '@angular/core';
import { SearchReclamosComponent } from './search-reclamos/search-reclamos.component';
import { ListReclamosComponent } from './list-reclamos/list-reclamos.component';
import { MainSharedService } from '@shared/services/main-shared.service';
import { BusquedaReclamoComponent } from "./busqueda-reclamo/busqueda-reclamo.component";

@Component({
	selector: 'app-libro-reclamo',
	standalone: true,
	imports: [ BusquedaReclamoComponent ],
	templateUrl: './libro-reclamos.component.html',
	styleUrls: ['./libro-reclamos.component.scss'],
})
export class LibroReclamosComponent {
	public codigo: string = '';
	public filtros!: { campus: string; fechaInicio: Date; fechaFin: Date };

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
}
