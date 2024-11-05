import { Component } from '@angular/core';
import { SearchReclamosComponent } from './search-reclamos/search-reclamos.component';
import { ListReclamosComponent } from './list-reclamos/list-reclamos.component';

@Component({
	selector: 'app-libro-reclamo',
	standalone: true,
	imports: [SearchReclamosComponent, ListReclamosComponent],
	templateUrl: './libro-reclamos.component.html',
	styleUrls: ['./libro-reclamos.component.scss'],
})
export class LibroReclamosComponent {
	public codigo: string = '';
	public filtros!: { campus: string; fechaInicio: Date; fechaFin: Date };
}
