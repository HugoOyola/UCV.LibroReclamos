import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

interface Reclamo {
  idreclamo: string;
  cRecNombre: string;
  cRecDni: string;
  cRecFecha: string;
  cRecEmail: string;
  cPerJuridica: string;
  arch?: string;
  tipo?: string;
  reenviar?: string;
  modelo?: string;
  accion?: string;
}

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
  public dataSource = new MatTableDataSource<Reclamo>([]);
  public campusNames = {
    'C1': 'Campus 1',
    'C2': 'Campus 2',
    // Add other mappings as needed
  };

  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  constructor() {
    // Populate the dataSource with data
    this.loadReclamos();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadReclamos(): void {
    // Replace with your actual data fetching logic
    const reclamos: Reclamo[] = [
      {
        idreclamo: '001',
        cRecNombre: 'John Doe',
        cRecDni: '12345678',
        cRecFecha: '2024-11-10',
        cRecEmail: 'john.doe@example.com',
        cPerJuridica: 'C1',
        arch: 'file1.pdf',
        tipo: 'Queja',
        reenviar: '',
        modelo: '',
        accion: '',
      },
      // Add more dummy data as needed
    ];
    this.dataSource.data = reclamos;
  }

  openDetalle(element: Reclamo): void {
    console.log('Opening details for:', element);
    // Add your logic to open details
  }

  openHistorial(element: Reclamo): void {
    console.log('Opening history for:', element);
    // Add your logic to open history
  }
}
