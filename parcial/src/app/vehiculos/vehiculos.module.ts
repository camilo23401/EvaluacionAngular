import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiculosComponent } from './list-vehiculos/list-vehiculos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListVehiculosComponent],
  declarations: [ListVehiculosComponent]
})
export class VehiculosModule { }
