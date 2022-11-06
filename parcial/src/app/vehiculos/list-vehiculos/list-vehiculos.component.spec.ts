/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListVehiculosComponent } from './list-vehiculos.component';
import { Vehiculo } from '../vehiculo';
import { RouterLinkActive } from '@angular/router';
import { VehiculoService } from '../vehiculo.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { end } from '@popperjs/core';

describe('ListVehiculosComponent', () => {
  let component: ListVehiculosComponent;
  let fixture: ComponentFixture<ListVehiculosComponent>;
  let debug: DebugElement;
  numcells: 0;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),CommonModule],
      declarations: [ ListVehiculosComponent ],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehiculosComponent);
    component = fixture.componentInstance;
    component.vehiculos=[
      new Vehiculo(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
      ),
      new Vehiculo(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
      ),
      new Vehiculo(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
      )
    ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table with header', () => {
    debug.queryAll(By.css('thead.th')).forEach((th)=>{
      expect(th.nativeElement.textContent).toMatch(/#|Marca|Linea|Modelo/)
  })
  });
  it('should have 3 rows of information', () => {
    debug.queryAll(By.css('tbody.th')).forEach((th)=>{
      expect(th.nativeElement.textContent).toMatch(/1|2|3/)
  })
  });
  it('should have 9 cells of information', () => {
    let cellNum = debug.queryAll(By.css('td')).length
    expect(cellNum).toEqual(9);
  });
})
