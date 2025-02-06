import { Component, Inject, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Reclamo } from '../../../../interface/reclamo';
import { CSelectComponent } from 'src/app/page/main/shared/c-select/c-select.component';
import { CEditorComponent } from 'src/app/page/main/shared/c-editor/c-editor.component';

@Component({
  selector: 'app-modal-detalle-reclamo',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CSelectComponent, MatIconModule, MatButton, MatDialogActions, CEditorComponent],
  templateUrl: './modal-detalle-reclamo.component.html',
  styleUrl: './modal-detalle-reclamo.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalDetalleReclamoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Reclamo) {}

  ngOnInit(): void {
    console.log('Modal data:', this.data);
    // Verify that cPerJuridica exists in the data
    if (this.data?.cPerJuridica) {
      console.log('Initial cPerJuridica:', this.data.cPerJuridica);
    }
  }
}