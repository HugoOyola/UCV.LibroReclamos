import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog,	MatDialogActions,	MatDialogClose,	MatDialogContent,	MatDialogModule,	MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-modal-historial-reclamo',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal-historial-reclamo.component.html',
  styleUrl: './modal-historial-reclamo.component.scss'
})
export class ModalHistorialReclamoComponent {
  public readonly dialog = inject(MatDialog);

  openHistorial(): void {
    this.dialog.open(ModalHistorialReclamoComponent);
  }
}
