import { Component, ViewChild, AfterViewInit, inject, Input, SimpleChanges, OnChanges,TemplateRef } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { ReclamoApiService } from '../../../services/reclamosdata.service';
import { ReclamoData } from '../../../interface/reclamosdata';
import { MatDialog } from '@angular/material/dialog';
import { CModalComponent, ModalData } from '../../../shared/c-modal/c-modal.component';
@Component({
  selector: 'app-listado-reclamo',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './listado-reclamo.component.html',
  styleUrl: './listado-reclamo.component.scss'
})

export class ListadoReclamoComponent implements OnChanges {
  @Input() public filtros?: { campus: string; startDate: Date | null; endDate: Date | null; tipoReclamo: string } | null;
  @Input() public codigo!: string;

  private reclamoService = inject(ReclamoApiService);

  public displayedColumns: string[] = [
    'idreclamo', 'cRecNombre', 'cRecDni', 'cRecFecha', 'cRecEmail', 'cPerJuridica', 'arch', 'tipo', 'reenviar', 'modelo', 'accion',
  ];
  public reclamos: ReclamoData[] = [];
  public totalRows = 0;
  public pageSize = 10;
  public pageIndex = 0;
  public loading = true;
  public isFirstLoad = true; // Nueva variable para controlar el primer estado de carga


  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  @ViewChild('detalleReclamoTemplate') public detalleReclamoTemplate!: TemplateRef<any>;

  // ngAfterViewInit(): void {
  //   if (this.paginator) {
  //     this.loadReclamos();
  //   }
  // }

  constructor(private dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtros'] && changes['filtros'].currentValue) {
      this.isFirstLoad = false;
      this.pageIndex = 0; // Resetear la página cuando se cambia la búsqueda
      this.loadReclamos();
    }
  }

  loadReclamos(): void {
    this.loading = true;
    if (!this.filtros) {
      return;
    }

    const today = new Date().toLocaleDateString('en-CA');

    const requestBody = {
      idReclamo: "0",
      cpercodigo: this.codigo,
      cPerJuridica: this.filtros.campus || "0",
      dFechaInicio: this.filtros.startDate ? this.filtros.startDate.toLocaleDateString('en-CA') : "2024-10-01",
      dFechaFin: this.filtros.endDate ? this.filtros.endDate.toLocaleDateString('en-CA') : today,
      cTipoReclamo: this.filtros.tipoReclamo || "30",
      cEstadoReclamo: "0",
      pagination: {
        pageIndex: this.pageIndex + 1,
        pageSize: this.pageSize,
        totalRows: 0
      }
    };

    console.log('Request Body:', requestBody);

    this.reclamoService.getReclamos(requestBody).subscribe(
      response => {
        this.reclamos = response.isSuccess ? response.lstItem : [];
        this.totalRows = response.pagination.totalRows;
        this.loading = false;
      },
      error => {
        console.error('Error en la solicitud:', error);
        this.loading = false;
      }
    );
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadReclamos();
  }

  downloadFile(fileId: string): void {
    const url = `https://ucvapiqa.azure-api.net/gdriveqa/Drive/ShowFile/${fileId}/2`;
    window.open(url, '_blank');
  }

  openDetalle(element: ReclamoData): void {
    const data: ModalData = {
      title: 'Detalle del Reclamo',
      contentTemplate: this.detalleReclamoTemplate,
      context: { data: element } // Proporciona el contexto para que `data` se refiera a `element`
    };

    this.dialog.open(CModalComponent, {
      data
    });
  }


  openHistorial(element: ReclamoData): void {
    console.log('Opening history for:', element);
  }
}