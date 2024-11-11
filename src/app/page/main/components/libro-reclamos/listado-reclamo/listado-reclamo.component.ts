import { Component, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
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

export class ListadoReclamoComponent implements AfterViewInit {
  private reclamoService = inject(ReclamoApiService);

  public displayedColumns: string[] = [
    'idreclamo',
    'cRecNombre',
    'cRecDni',
    'cRecFecha',
    'cRecEmail',
    'cPerJuridica',
    'arch',
    'tipo',
    'reenviar',
    'modelo',
    'accion',
  ];
  public reclamos: ReclamoData[] = [];
  public totalRows = 0;
  public pageSize = 10;
  public pageIndex = 0;

  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.loadReclamos(this.pageIndex, this.pageSize);
  }

  loadReclamos(pageIndex: number, pageSize: number): void {
    const requestBody = {
      idReclamo: "0",
      cpercodigo: "7000090106",
      cPerJuridica: "0",
      dFechaInicio: "2024-09-01",
      dFechaFin: "2024-10-10",
      cTipoReclamo: "30",
      cEstadoReclamo: "0",
      pagination: {
        pageIndex: pageIndex + 1, // Incrementa para la API (si es base 1)
        pageSize: pageSize,
        totalRows: 0,
      }
    };

    this.reclamoService.getReclamos(requestBody).subscribe(response => {
      if (response.isSuccess) {
        this.reclamos = response.lstItem; // Cargar datos manualmente
        this.totalRows = response.pagination.totalRows; // Establecer el total de filas
        this.paginator.pageIndex = pageIndex; // Asegurar el pageIndex correcto
      } else {
        console.error('Error al obtener los reclamos:', response.lstError);
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadReclamos(this.pageIndex, this.pageSize); // Cargar datos de la nueva página
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