import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectService } from '../../services/select.service';

interface ComponentSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-c-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './c-select.component.html',
  styleUrl: './c-select.component.scss'
})
export class CSelectComponent implements OnInit, OnChanges {
  @Input() public codigo: string = '';
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public id: string = '';
  @Input() public apiType: 'options' | 'sedes' | 'intranetUnidad' = 'options'; // Define el tipo de API a usar
  @Input() public cPerJuridica: string = ''; // Nuevo Input para cPerJuridica
  @Output() public selectedValueChange = new EventEmitter<string>(); // Nuevo Output para emitir el valor seleccionado

  public datosSelect: ComponentSelect[] = [];
  public selectedValue: string = ''; // Valor seleccionado para el select

  constructor(private selectService: SelectService) {}

  ngOnInit(): void {
    // Cargar opciones iniciales en caso de que ya exista un código
    this.loadOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Detectar cambios en codigo y cargar datos si ha cambiado
    if (changes['codigo'] || changes['cPerJuridica'] || changes['selectedCodigo']) {
      this.loadOptions();
    }
  }

  // Método loadOptions actualizado para manejar el uso de código solo en 'sedes'
  private loadOptions(): void {
    if (this.apiType === 'options') {
      this.selectService.getData('options').subscribe(
        (data) => {
          this.datosSelect = data;
          console.log('Datos cargados en datosSelect para options:', this.datosSelect);
        },
        (error) => {
          console.error('Error al cargar opciones de options:', error);
          this.datosSelect = [];
        }
      );
    } else if (this.apiType === 'sedes' && this.codigo) {
      this.selectService.getData('sedes', this.codigo).subscribe(
        (data) => {
          this.datosSelect = data;
          console.log('Datos cargados en datosSelect para sedes:', this.datosSelect);
        },
        (error) => {
          console.error('Error al cargar opciones de sedes:', error);
          this.datosSelect = [];
        }
      );
    } else if (this.apiType === 'intranetUnidad' && this.cPerJuridica) {
      this.selectService.getData('intranetUnidad', this.cPerJuridica).subscribe(
        (data) => {
          this.datosSelect = data;
          console.log('Datos cargados en datosSelect para intranetUnidad:', this.datosSelect);
        },
        (error) => {
          console.error('Error al cargar opciones de intranetUnidad:', error);
          this.datosSelect = [];
        }
      );
    } else {
      console.warn('No se puede cargar datos sin un valor válido para el tipo de API seleccionado');
      this.datosSelect = [];
    }
  }

  onOptionSelected(value: string): void {
    this.selectedValueChange.emit(value); // Emitir el valor seleccionado
  }
}