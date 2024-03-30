import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShipmentSearchComponent } from './home-shipment-search/home-shipment-search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeShipmentSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
