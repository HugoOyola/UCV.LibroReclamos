import { Component } from '@angular/core';
import { SearchReclamosComponent } from './search-reclamos/search-reclamos.component';
import { ListadoReclamosComponent } from './listado-reclamos/listado-reclamos.component';

@Component({
	selector: 'app-libro-reclamo',
	standalone: true,
	imports: [SearchReclamosComponent, ListadoReclamosComponent],
	templateUrl: './libro-reclamos.component.html',
	styleUrls: ['./libro-reclamos.component.scss'],
})
export class LibroReclamosComponent {}
