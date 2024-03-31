import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentResultsComponent } from './shipment-results/shipment-results.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ShipmentResultsComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    TranslateModule,
    FormsModule,
    
  ]
})
export class ShipmentModule { }
