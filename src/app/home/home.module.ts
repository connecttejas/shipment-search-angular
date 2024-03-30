import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeShipmentSearchComponent } from './home-shipment-search/home-shipment-search.component';
import { AppModule } from '../app.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeShipmentSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ]
})
export class HomeModule { }
