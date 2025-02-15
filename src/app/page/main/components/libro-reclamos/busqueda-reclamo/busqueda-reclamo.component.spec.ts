import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaReclamoComponent } from './busqueda-reclamo.component';

describe('BusquedaReclamoComponent', () => {
  let component: BusquedaReclamoComponent;
  let fixture: ComponentFixture<BusquedaReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaReclamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
