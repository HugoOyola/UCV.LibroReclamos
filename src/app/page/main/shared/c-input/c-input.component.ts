import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-c-input',
	standalone: true,
	imports: [MatFormFieldModule, MatInputModule, MatIconModule],
	templateUrl: './c-input.component.html',
	styleUrl: './c-input.component.scss',
})
export class CInputComponent {
	@Input() public placeholder: string = '';
	@Input() public label: string = '';
	@Input() public type: string = '';
	@Input() public id: string = '';
}
