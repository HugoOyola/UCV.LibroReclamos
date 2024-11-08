import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-c-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './c-button.component.html',
  styleUrl: './c-button.component.scss'
})
export class CButtonComponent {
  @Input() public icon!: string;
  @Input() public label!: string;
  @Input() public color: 'primary' | 'accent' | 'warn' = 'primary';
  @Output() public clicked = new EventEmitter<void>();

  handleClick(): void {
    this.clicked.emit();
  }
}
