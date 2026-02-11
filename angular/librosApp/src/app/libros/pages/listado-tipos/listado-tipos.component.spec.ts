import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTiposComponent } from './listado-tipos.component';

describe('ListadoTiposComponent', () => {
  let component: ListadoTiposComponent;
  let fixture: ComponentFixture<ListadoTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
