import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Universidad } from '../../../interface/universidades';
import { UniversidadService } from '../../../services/universidades.service';
import { CCalendarComponent } from "../../../shared/c-calendar/c-calendar.component";
import { CSelectComponent } from '../../../shared/c-select/c-select.component';
import { CRadioComponent } from "../../../shared/c-radio/c-radio.component";
import { CInputComponent } from '../../../shared/c-input/c-input.component';
import { CButtonComponent } from '../../../shared/c-button/c-button.component';


@Component({
  selector: 'app-busqueda-reclamo',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CSelectComponent,
    CCalendarComponent,
    CRadioComponent,
    CInputComponent,
    CButtonComponent
  ],
  templateUrl: './busqueda-reclamo.component.html',
  styleUrl: './busqueda-reclamo.component.scss'
})
export class BusquedaReclamoComponent {
  @Input() public codigo: string = '';
  @Output() public buscar = new EventEmitter<{ startDate: Date | null; endDate: Date | null; tipoReclamo: string }>();

  @ViewChild(CCalendarComponent) public calendarComponent!: CCalendarComponent;
  @ViewChild(CRadioComponent) public radioComponent!: CRadioComponent;

  public startDate: Date | null = null;
  public endDate: Date | null = null;
  public tipoReclamo: string = '2';

  // Método para capturar el rango de fechas del componente calendario
  onDateRangeSelected(range: { startDate: Date | null; endDate: Date | null }): void {
    this.startDate = range.startDate;
    this.endDate = range.endDate;
  }

  // Método para capturar el tipo de reclamo del componente de radio button
  onTipoReclamoChange(tipo: string): void {
    this.tipoReclamo = tipo;
  }

  // Método que emite todos los valores cuando se hace clic en el botón de búsqueda
  handleBusquedaDetallada(): void {
    console.log("Buscar Detallada");
    console.log("Fecha de Inicio seleccionada:", this.startDate);
    console.log("Fecha de Fin seleccionada:", this.endDate);
    console.log("Tipo de Reclamo seleccionado:", this.tipoReclamo);

    this.buscar.emit({
      startDate: this.startDate,
      endDate: this.endDate,
      tipoReclamo: this.tipoReclamo
    });
  }

  handleBusquedaCodigo(): void {
    console.log("Buscar por Codigo");
  }

  handleClear(): void {
    this.startDate = null;
    this.endDate = null;
    this.tipoReclamo = '2';

    // Llamar a los métodos de limpieza de los componentes hijos
    this.calendarComponent.clearDates();
    this.radioComponent.clearSelection();
  }
}
