import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog,	MatDialogActions,	MatDialogClose,	MatDialogContent,	MatDialogModule,	MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-tipo-reclamo',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal-tipo-reclamo.component.html',
  styleUrl: './modal-tipo-reclamo.component.scss'
})
export class ModalTipoReclamoComponent {
  public readonly dialog = inject(MatDialog);

  openHistorial(): void {
    this.dialog.open(ModalTipoReclamoComponent);
  }
}
