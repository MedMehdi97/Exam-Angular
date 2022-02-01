import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreDetailsComponent } from './titre-details.component';

describe('TitreDetailsComponent', () => {
  let component: TitreDetailsComponent;
  let fixture: ComponentFixture<TitreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
