import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleReclamoComponent } from './modal-detalle-reclamo.component';

describe('ModalDetalleReclamoComponent', () => {
  let component: ModalDetalleReclamoComponent;
  let fixture: ComponentFixture<ModalDetalleReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetalleReclamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetalleReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
