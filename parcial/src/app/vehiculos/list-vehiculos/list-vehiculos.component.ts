import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-list-vehiculos',
  templateUrl: './list-vehiculos.component.html',
  styleUrls: ['./list-vehiculos.component.css']
})
export class ListVehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = []

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos()
  }

  getVehiculos():void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos)=>this.vehiculos = vehiculos)
  }

}
