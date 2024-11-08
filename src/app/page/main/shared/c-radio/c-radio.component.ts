import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';

interface RadioOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-c-radio',
  standalone: true,
  imports: [MatRadioModule, FormsModule, MatLabel],
  templateUrl: './c-radio.component.html',
  styleUrl: './c-radio.component.scss'
})
export class CRadioComponent {
  @Input() public label: string = '';
  @Input() public radioOptions: RadioOption[] = [];

  // Establece '2' (Todos) como valor predeterminado
  public selectedValue: string = '2';
}
