import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatDialog,	MatDialogActions,	MatDialogClose,	MatDialogContent,	MatDialogModule,	MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CSelectComponent } from '../../../../shared/c-select/c-select.component';

@Component({
  selector: 'app-modal-derivar-reclamo',
  standalone: true,
  imports: [ MatDialogModule, MatIconModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatSelectModule, CSelectComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal-derivar-reclamo.component.html',
  styleUrl: './modal-derivar-reclamo.component.scss'
})
export class ModalDerivarReclamoComponent {
  @Input() public codigo: string = '7000090106';
  public campusSelected: string = '';

  public readonly dialog = inject(MatDialog);

  // Método para capturar el campus seleccionado del componente select
  onCampusSelected(campus: string): void {
    this.campusSelected = campus; // Asignar el valor seleccionado a campusSelected
  }

  openHistorial(): void {
    this.dialog.open(ModalDerivarReclamoComponent);
  }
}
