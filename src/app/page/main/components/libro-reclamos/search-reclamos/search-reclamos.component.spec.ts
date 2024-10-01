import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReclamosComponent } from './search-reclamos.component';

describe('SearchReclamosComponent', () => {
  let component: SearchReclamosComponent;
  let fixture: ComponentFixture<SearchReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchReclamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
