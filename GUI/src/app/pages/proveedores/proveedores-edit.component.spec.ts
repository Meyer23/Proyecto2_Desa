import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresEditComponent } from './proveedores-edit.component';

describe('ProveedoresEditComponent', () => {
  let component: ProveedoresEditComponent;
  let fixture: ComponentFixture<ProveedoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
