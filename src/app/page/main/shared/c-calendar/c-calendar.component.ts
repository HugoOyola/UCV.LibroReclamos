import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-c-calendar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule],
  templateUrl: './c-calendar.component.html',
  styleUrl: './c-calendar.component.scss'
})
export class CCalendarComponent {
  @Input() public placeholderIni: string = '';
  @Input() public placeholderFin: string = '';
  @Input() public label: string = '';
  @Output() public dateRangeSelected = new EventEmitter<{ startDate: Date | null; endDate: Date | null }>();

  public startDate: Date | null = null;
  public endDate: Date | null = null;

  onStartDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.startDate = event.value;
    this.emitDateRangeIfComplete();
  }

  onEndDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.endDate = event.value;
    this.emitDateRangeIfComplete();
  }

  private emitDateRangeIfComplete(): void {
    if (this.startDate && this.endDate) {
      this.dateRangeSelected.emit({ startDate: this.startDate, endDate: this.endDate });
    }
  }

  // Método para limpiar las fechas
  clearDates(): void {
    this.startDate = null;
    this.endDate = null;
    this.dateRangeSelected.emit({ startDate: null, endDate: null });
  }
}
