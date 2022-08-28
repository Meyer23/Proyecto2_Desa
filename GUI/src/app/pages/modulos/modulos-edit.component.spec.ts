import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosEditComponent } from './modulos-edit.component';

describe('ModulosEditComponent', () => {
  let component: ModulosEditComponent;
  let fixture: ComponentFixture<ModulosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
