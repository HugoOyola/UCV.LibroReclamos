import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
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

  handleBusquedaDetallada(): void {
    console.log("Buscar Detallada");
  }

  handleBusquedaCodigo(): void {
    console.log("Busqueda por codigo");
  }

  handleClear(): void {
    console.log("Limpiar");
  }
}
