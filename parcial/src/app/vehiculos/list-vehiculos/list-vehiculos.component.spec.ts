/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListVehiculosComponent } from './list-vehiculos.component';

describe('ListVehiculosComponent', () => {
  let component: ListVehiculosComponent;
  let fixture: ComponentFixture<ListVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
