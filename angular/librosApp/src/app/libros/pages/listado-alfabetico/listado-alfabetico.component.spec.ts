import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlfabeticoComponent } from './listado-alfabetico.component';

describe('ListadoAlfabeticoComponent', () => {
  let component: ListadoAlfabeticoComponent;
  let fixture: ComponentFixture<ListadoAlfabeticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAlfabeticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoAlfabeticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
