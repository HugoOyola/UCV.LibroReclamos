import { Component, ViewChild, AfterViewInit, inject, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { ReclamoApiService } from '../../../services/reclamosdata.service';
import { ReclamoData } from '../../../interface/reclamosdata';
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

export class ListadoReclamoComponent implements AfterViewInit, OnChanges {
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

  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.loadReclamos();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Verificar si `filtros` tiene un valor válido después de hacer clic en buscar
    if (changes['filtros'] && changes['filtros'].currentValue) {
      this.loadReclamos();
    }
  }

  loadReclamos(): void {
    if (!this.filtros) {
      return; // Salir si filtros es null o undefined
    }

    const today = new Date().toLocaleDateString('en-CA'); // Fecha actual en formato 'YYYY-MM-DD'

    const requestBody = {
      idReclamo: "0",
      cpercodigo: this.codigo,
      cPerJuridica: this.filtros.campus || "0",
      dFechaInicio: this.filtros.startDate ? this.filtros.startDate.toLocaleDateString('en-CA') : "2024-10-01",
      dFechaFin: this.filtros.endDate ? this.filtros.endDate.toLocaleDateString('en-CA') : today,  // Usa hoy si no se especifica fecha de fin
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
        if (response.isSuccess) {
          this.reclamos = response.lstItem;
          this.totalRows = response.pagination.totalRows;
        } else {
          console.error('Error fetching reclamos:', response.lstError);
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
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
    console.log('Opening details for:', element);
  }

  openHistorial(element: ReclamoData): void {
    console.log('Opening history for:', element);
  }
}