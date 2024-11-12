import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Reclamo } from '../../../../interface/reclamo';
import { CSelectComponent } from 'src/app/page/main/shared/c-select/c-select.component';

@Component({
  selector: 'app-modal-detalle-reclamo',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CSelectComponent, MatIconModule, MatButton, MatDialogActions],
  templateUrl: './modal-detalle-reclamo.component.html',
  styleUrl: './modal-detalle-reclamo.component.scss'
})
export class ModalDetalleReclamoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Reclamo) { }
}
