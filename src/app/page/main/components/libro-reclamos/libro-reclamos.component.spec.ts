import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroReclamosComponent } from './libro-reclamos.component';

describe('LibroReclamosComponent', () => {
  let component: LibroReclamosComponent;
  let fixture: ComponentFixture<LibroReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroReclamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
