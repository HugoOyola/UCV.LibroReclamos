import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReclamoComponent } from './listado-reclamo.component';

describe('ListadoReclamoComponent', () => {
  let component: ListadoReclamoComponent;
  let fixture: ComponentFixture<ListadoReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoReclamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
