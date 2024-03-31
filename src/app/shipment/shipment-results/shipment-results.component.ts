import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-results',
  templateUrl: './shipment-results.component.html',
  styleUrl: './shipment-results.component.scss'
})
export class ShipmentResultsComponent implements OnInit {

  public shipmentListResponse: any = {};
  public filteredShipmentListResponse: any = {};
  public statuses = [
    "Ready for Backroom Pick",
    "Backroom Pick In Progress",
    "Ready for Customer Pickup",
    "Ready for Packing",
    "Packing in Progress",
    "Packed",
    "Shipped/Picked",
    "Cancelled"
  ];

  constructor(private helperService: HelperService, private router: Router) {
  }

  ngOnInit(): void {
    this.helperService.getAllShipments()
      .subscribe(data => {
        this.shipmentListResponse = data ?? {};
        this.filteredShipmentListResponse = { ...this.shipmentListResponse };

      });
  }

  public onBack() {
    history.back();
  }

  public onClose() {
    this.router.navigate(['/home']);
  }

  public onTileClick(shipment: any) {
    const id = shipment.OrderNo;
    this.router.navigate(['/shipment/details', id]);
  }

  public openFilterPopUp() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  public closeFilterPopUp() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  public onFiltersApplied() {
    const selectedStatuses = this.statuses.filter(status => {
      const checkbox = document.getElementById(status) as HTMLInputElement;
      return checkbox.checked;
    }) ?? [];
    console.log("Selected Statuses:", selectedStatuses);

    if (selectedStatuses.length === 0) {
      this.filteredShipmentListResponse = { ...this.shipmentListResponse };
    } else {
      const filteredShipmentListResponse: any = {
        Shipments: {
          TotalNumberOfRecords: this.shipmentListResponse.Shipments.TotalNumberOfRecords,
          Shipment: this.shipmentListResponse.Shipments.Shipment.filter((shipment: { Status: string; }) => selectedStatuses.includes(shipment.Status))
        }
      };
      this.filteredShipmentListResponse = { ...filteredShipmentListResponse };
    }
    this.closeFilterPopUp();
  }


  public onResetFilters() {
    this.statuses.forEach(status => {
      const checkbox = document.getElementById(status) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = false;
      }
    });
  }

}
