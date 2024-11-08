import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRadioComponent } from './c-radio.component';

describe('CRadioComponent', () => {
  let component: CRadioComponent;
  let fixture: ComponentFixture<CRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
