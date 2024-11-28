import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTipoReclamoComponent } from './modal-tipo-reclamo.component';

describe('ModalTipoReclamoComponent', () => {
  let component: ModalTipoReclamoComponent;
  let fixture: ComponentFixture<ModalTipoReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTipoReclamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTipoReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
