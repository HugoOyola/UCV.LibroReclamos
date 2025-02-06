import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-c-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './c-editor.component.html',
  styleUrl: './c-editor.component.scss'
})
export class CEditorComponent {
  @Input() public content: string = '';
  @Output() public contentChange = new EventEmitter<string>();

  onContentChange(): void {
    this.contentChange.emit(this.content);
  }

  applyTag(tag: string): void {
    const textarea = document.querySelector('.editor-textarea') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = this.content.slice(start, end);

    const before = this.content.slice(0, start);
    const after = this.content.slice(end);

    this.content = `${before}<${tag}>${selectedText}</${tag}>${after}`;
    this.contentChange.emit(this.content);

    // Restaurar selección.
    setTimeout(() => {
      textarea.setSelectionRange(start + tag.length + 2, end + tag.length + 2);
      textarea.focus();
    });
  }
}
