import { ThisReceiver } from '@angular/compiler';
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
  numRenault: number = 0;
  numChevrolet: number = 0;
  numNissan: number = 0;


  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos()
    console.log(this.numRenault)
  }

  getVehiculos():void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos)=>{this.vehiculos = vehiculos; this.calculateNumber()})
  }

  calculateNumber():void {
    console.log(this.vehiculos.length)
    for(let i=0; i<this.vehiculos.length; i++)
    {
      if(this.vehiculos[i].marca=="Renault")
      {
        this.numRenault++
      }
      if(this.vehiculos[i].marca=="Chevrolet")
      {
        this.numChevrolet++
      }
      if(this.vehiculos[i].marca=="Nissan")
      {
        this.numNissan++
      }
    }
  }

}
