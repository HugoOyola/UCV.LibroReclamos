import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistorialReclamoComponent } from './modal-historial-reclamo.component';

describe('ModalHistorialReclamoComponent', () => {
  let component: ModalHistorialReclamoComponent;
  let fixture: ComponentFixture<ModalHistorialReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalHistorialReclamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHistorialReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
