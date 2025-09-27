import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviccios } from './serviccios';

describe('Serviccios', () => {
  let component: Serviccios;
  let fixture: ComponentFixture<Serviccios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serviccios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serviccios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
