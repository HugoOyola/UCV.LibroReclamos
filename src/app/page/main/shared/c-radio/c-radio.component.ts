import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() public selectedValueChange = new EventEmitter<string>();

  // Valor predeterminado
  public selectedValue: string = '2';

  // Emitir el valor seleccionado cuando cambia
  onSelectionChange(): void {
    this.selectedValueChange.emit(this.selectedValue);
  }

  // Método para restablecer el valor seleccionado
  clearSelection():void {
    this.selectedValue = '2'; // Restablece al valor predeterminado
    this.selectedValueChange.emit(this.selectedValue);
  }
}
