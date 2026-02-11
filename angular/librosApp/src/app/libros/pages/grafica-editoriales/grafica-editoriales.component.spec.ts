import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEditorialesComponent } from './grafica-editoriales.component';

describe('GraficaEditorialesComponent', () => {
  let component: GraficaEditorialesComponent;
  let fixture: ComponentFixture<GraficaEditorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaEditorialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
