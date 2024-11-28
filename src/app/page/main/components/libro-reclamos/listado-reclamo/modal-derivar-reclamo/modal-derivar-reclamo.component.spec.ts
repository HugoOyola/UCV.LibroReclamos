import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDerivarReclamoComponent } from './modal-derivar-reclamo.component';

describe('ModalDerivarReclamoComponent', () => {
  let component: ModalDerivarReclamoComponent;
  let fixture: ComponentFixture<ModalDerivarReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDerivarReclamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDerivarReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
