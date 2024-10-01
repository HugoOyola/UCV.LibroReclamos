import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReclamosComponent } from './list-reclamos.component';

describe('ListReclamosComponent', () => {
  let component: ListReclamosComponent;
  let fixture: ComponentFixture<ListReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListReclamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
