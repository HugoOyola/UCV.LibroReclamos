import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEditorComponent } from './c-editor.component';

describe('CEditorComponent', () => {
  let component: CEditorComponent;
  let fixture: ComponentFixture<CEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
