import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectService } from '../../services/select.service';

interface ComponentSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-c-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './c-select.component.html',
  styleUrl: './c-select.component.scss'
})
export class CSelectComponent implements OnInit {
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public id: string = '';
  @Input() public apiType: 'options' | 'sedes' = 'options';  // Define el tipo de API a usar

  public datosSelect: ComponentSelect[] = [];

  constructor(private selectService: SelectService) { }

  ngOnInit(): void {
    this.selectService.getData(this.apiType).subscribe((data) => {
      this.datosSelect = data;
    });
  }
}
