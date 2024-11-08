import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
}
