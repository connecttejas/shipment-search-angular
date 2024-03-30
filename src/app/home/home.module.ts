import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeShipmentSearchComponent } from './home-shipment-search/home-shipment-search.component';


@NgModule({
  declarations: [
    HomeShipmentSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
