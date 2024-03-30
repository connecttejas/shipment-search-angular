import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentResultsComponent } from './shipment-results/shipment-results.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';


@NgModule({
  declarations: [
    ShipmentResultsComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule
  ]
})
export class ShipmentModule { }
