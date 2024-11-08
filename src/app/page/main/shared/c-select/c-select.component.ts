import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() public apiType: 'options' | 'sedes' = 'options';

  public datosSelect: ComponentSelect[] = [];

  constructor(private selectService: SelectService) {}

  ngOnInit(): void {
    // Cargar opciones iniciales en caso de que ya exista un código
    this.loadOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Detectar cambios en `codigo` y cargar datos si ha cambiado
    if (changes['codigo'] && changes['codigo'].currentValue) {
      this.loadOptions();
    }
  }

  private loadOptions(): void {
    // Llama a `getData` solo si `codigo` tiene un valor
    if (this.codigo) {
      this.selectService.getData(this.apiType, this.codigo).subscribe(
        (data) => {
          this.datosSelect = data;
        },
        () => {
          this.datosSelect = []; // En caso de error, vaciar la lista de opciones
        }
      );
    } else {
      this.datosSelect = []; // Vaciar si `codigo` es vacío o nulo
    }
  }
}
