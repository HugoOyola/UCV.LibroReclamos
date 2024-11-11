import { Component, Inject, TemplateRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface ModalData {
  title: string;
  contentTemplate: TemplateRef<any>;
  context?: { [key: string]: any }; // Propiedad opcional para pasar contexto adicional
}

@Component({
  selector: 'app-c-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './c-modal.component.html',
  styleUrl: './c-modal.component.scss'
})
export class CModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}
}
